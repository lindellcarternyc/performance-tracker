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
  
  startDate: string
  startTime: string
  
  endDate: string
  endTime: string
  
  pay: string
  location: string
}

export interface UpdateGigParams {
  id: string
  updateModel: GigFormModel
}