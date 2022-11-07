import { IParams } from './../types/type/types';
import { IAxiosPromise } from './../types/axiosPromise.interface';
import { IAxiosPromiseForecast } from '../types/axiosPromiseForecast.interface';
import axios from "axios"



const makeIconUrl = (iconId: string) => `http://openweathermap.org/img/wn/${iconId}@2x.png`

export const getFormattedWeatherData = async({city, units}:IParams) => {
    debugger
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

    const forecast = await axios.get<IAxiosPromiseForecast>(`${process.env.REACT_APP_BASE_URL}/forecast?q=${city}&${units}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.data)

    
    return {formatWeather, forecast}
    
}
