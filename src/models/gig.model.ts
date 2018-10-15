export interface GigModel {
  id: string

  start: Date
  end: Date
  title: string

  pay: number
  location: string
}

export interface NewGigModel {
  title: string
  start: {
    date: string
    time: string
  }
  end: {
    date: string
    time: string
  }
  pay: string
  location: string
}