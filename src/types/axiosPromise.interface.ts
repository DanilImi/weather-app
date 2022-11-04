import { clouds, coord, main, weather, wind } from "./type/types"

export interface IAxiosPromise {
  base: string
  clouds: clouds
  cod: number
  coord: coord
  dt: number
  id: number
  main: main
  name: string
  sys: {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: 1
  }
  timezone: number
  visibility: number
  weather: weather[]
  wind: wind
}