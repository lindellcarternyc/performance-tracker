import * as firebase from 'firebase'

import initConfig from './config'
import { 
  DatabaseCollection, 
  DatabaseConfig, DatabaseModel } from './types'

import { GigModel } from 'models/gig.model'

type GigSubscriptionCB = (collection: DatabaseCollection<GigModel>) => void

class Database {
  private db: firebase.database.Database
  private gigsRef: firebase.database.Reference

  private gigsSubscriptions: GigSubscriptionCB[] = []

  constructor(config: DatabaseConfig = initConfig()) {
    firebase.initializeApp(config)
    this.db = firebase.database()
    this.gigsRef = this.db.ref('/gigs')
    
    this.subscribeToGigs()
  }

  public subscribe = (collectionName: 'gigs', cb: GigSubscriptionCB) => {
    this.gigsSubscriptions.push(cb)
  }

  public create = <T>(type: 'gig', model: DatabaseModel<T>) => {
    // tslint:disable-next-line:no-console
    // const update = {
    //   [`/gigs/${model.id}`]: model
    // }

    this.gigsRef.update({[model.id]: model})
  }

  public getGigs = <T>() => {
    return this.db.ref('/gigs').once('value')
      .then(snapshot => {
        return snapshot.val() as DatabaseModel<T>
      })
  }

  private subscribeToGigs = () => {
    // tslint:disable-next-line:no-console
    console.log('db.subscribToGigs')
    this.gigsRef.on('value', snapshot => {
      if ( snapshot ) {
        // tslint:disable-next-line:no-console
        console.log('snapshot.val', snapshot.val())
        for ( const cb of this.gigsSubscriptions ) {
          cb(snapshot.val())
        }
      }
    })
  }
}

export default Database