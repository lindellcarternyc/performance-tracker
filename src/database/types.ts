export type DatabaseModel<T> = { [K in keyof T]: string } & { id: string }

export interface DatabaseCollection<T> {
  [id: string]: DatabaseModel<T>
}

export interface DatabaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
}