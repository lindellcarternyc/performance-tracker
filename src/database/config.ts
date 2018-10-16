import { DatabaseConfig } from './types'

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const databaseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID

const config: Partial<DatabaseConfig> = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
}

const validateConfig = () => {
  for ( const key in config ) {
    if ( config[key] === undefined ) {
      throw new Error(`Missing config value "${key}"`)
    }
  }
}

const initDatabaseConfig = (): DatabaseConfig => {
  validateConfig()
  return config as DatabaseConfig
}

export default initDatabaseConfig