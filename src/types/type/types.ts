import { IAxiosPromiseForecast } from './../axiosPromiseForecast.interface';
import { IAxiosPromise } from './../axiosPromise.interface';

export interface IState {
  weather: IAxiosPromise
  forecast: IAxiosPromiseForecast
}


export interface IParams {
  city: string
  units: string
}

export interface main {
  feels_like:number,
  grnd_level?:number
  humidity:number
  pressure:number
  sea_level?:number
  temp:number
  temp_kf?:number
  temp_max:number
  temp_min:number
}

export interface weather {
  description: string,
  icon: string,
  id:number,
  main: string
}


export interface wind {
  deg: number,
  gust: number,
  speed: number
}

export interface coord {
  lat: number,
  lon: number
}

export interface clouds {
  all: number
}