export interface Route {
  path: string
  exact?: true
}

type RouteKeys = 'Home' | 'Gigs' | 'Gig' | 'NewGig' | 'EditGig'

type RouteMap = { [K in RouteKeys]: Route }

export const Routes: RouteMap = {
  Home: { path: '/', exact: true },
  Gigs: { path: '/gigs' },
  Gig: { path: '/gig/:id'},
  NewGig: { path: '/new-gig'},
  EditGig: { path: '/edit-gig/:id'}
}