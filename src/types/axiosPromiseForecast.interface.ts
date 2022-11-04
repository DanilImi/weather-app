import { clouds, coord, main, weather, wind } from "./type/types"

export interface IAxiosPromiseForecast {
  city: {
    coord: coord
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
  }
  cnt: number
  cod: number
  list: [
    {
      clouds: clouds
      dt: number
      dt_txt: string
      main: main
      pop: number
      sys: {pod: string}
      visibility: number
      weather: weather
      wind: wind
    }
  ]
}