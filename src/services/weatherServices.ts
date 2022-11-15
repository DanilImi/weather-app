import { IParams, IParamsForecast } from './../types/type/types';
import { IAxiosPromise } from './../types/axiosPromise.interface';
import { IAxiosPromiseForecast } from '../types/axiosPromiseForecast.interface';
import axios from "axios"


export const makeIconUrl = (iconId: string) => `http://openweathermap.org/img/wn/${iconId}@2x.png`

export const getFormattedWeatherData = async({city, units}:IParams) => {
    const weatherData = await axios.get<IAxiosPromise>(`${process.env.REACT_APP_BASE_URL}/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=${units}`)
      .then((res) => res.data)
    const {
      weather,
      main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
      wind: {speed},
      sys: {country},
      name,
    } = weatherData
    const {description, icon} = weather[0]
    
    const formatWeather = {
      description,
      iconURL: makeIconUrl(icon),
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      country,
      name,
    }
    return {formatWeather} 
}

export const getFormattedForecastData = async({cityForecast, unitsForecast}:IParamsForecast) => {

  const forecast = await axios.get<IAxiosPromiseForecast>(`${process.env.REACT_APP_BASE_URL}/forecast?q=${cityForecast}&appid=${process.env.REACT_APP_API_KEY}&units=${unitsForecast}`)
    .then(res => res.data)
  const {
    list
  } = forecast
  
  const formatForecast = {
    list
  }
  return {formatForecast} 
}


