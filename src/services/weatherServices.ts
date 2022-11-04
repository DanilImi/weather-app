import { IParams } from './../types/type/types';
import { IAxiosPromise } from './../types/axiosPromise.interface';
import { IAxiosPromiseForecast } from '../types/axiosPromiseForecast.interface';
import axios from "axios"


export const getFormattedWeatherData = async({city, units}:IParams) => {
  
    const weather = await axios.get<IAxiosPromise>(`${process.env.REACT_APP_BASE_URL}/weather?q=${city}&${units}&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.data)

    const forecast = await axios.get<IAxiosPromiseForecast>(`${process.env.REACT_APP_BASE_URL}/forecast?q=${city}&${units}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.data)

    
    return {weather, forecast}
    
}
