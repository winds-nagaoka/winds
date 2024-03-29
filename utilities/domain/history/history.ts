export type Time = {
  timestamp: number
  date: string
  time?: string
  label?: string
}

export type Conductor = {
  name: string
}

export type Guest = {
  name: string
  instrument: string
  url?: string
  blog?: string
  belong?: string
}

export type Content = {
  label: string
  music: Array<number>
}

export type Data = {
  audio?: number
  video?: number
  title: string
  composer?: string
  arranger?: string
  movement?: Array<string>
  add?: Array<string>
}

export type History = {
  id: string
  type: 'main' | 'mini' | 'other'
  title: string
  time: Time
  place?: Array<string>
  conductor?: Array<Conductor>
  guest?: Array<Guest>
  poster?: string
  guide?: string
  contents: Array<Content>
  data: Array<Data>
}
