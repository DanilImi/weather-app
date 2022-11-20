import { IList } from '../axiosPromiseForecast.interface';

export interface IState {
  description: string
  iconURL: string
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  speed: number
  country: string
  name: string
}

export interface IForecast {
  list: IList[]
}

export interface IParams {
  city: string
  units: string
}

export interface IParamsForecast {
  cityForecast: string
  unitsForecast: string
}

export interface main {
  feels_like: number
  grnd_level?: number
  humidity: number
  pressure: number
  sea_level?: number
  temp: number
  temp_kf?: number
  temp_max: number
  temp_min: number
}

export interface weather {
  description: string
  icon: string
  id: number
  main: string
}

export interface wind {
  deg: number
  gust: number
  speed: number
}

export interface coord {
  lat: number
  lon: number
}

export interface clouds {
  all: number
}
