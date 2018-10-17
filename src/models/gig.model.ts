export interface GigModel {
  id: string

  start: Date
  end: Date
  title: string

  pay: number
  location: string
}

export interface GigModelCollection { [id: string]: GigModel }

export interface GigFormModel {
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