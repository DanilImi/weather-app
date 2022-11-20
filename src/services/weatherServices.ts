import axios from 'axios';
import { IParams, IParamsForecast } from '../types/type/types';
import { IAxiosPromise } from '../types/axiosPromise.interface';
import { IAxiosPromiseForecast, IList } from '../types/axiosPromiseForecast.interface';

interface IFormatWeather {
  formatWeather: {
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
}
const API_KEY = 'eb0fa246fe5b071ca89a6c91484d595d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const makeIconUrl = (iconId: string): string => `http://openweathermap.org/img/wn/${iconId}@2x.png`;

export const getFormattedWeatherData = async ({ city, units }: IParams): Promise<IFormatWeather> => {
  const weatherData = await axios.get<IAxiosPromise>(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${units}`)
    .then((res) => res.data);
  const {
    weather,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    main: {
      temp, feels_like, temp_min, temp_max, pressure, humidity,
    },
    wind: { speed },
    sys: { country },
    name,
  } = weatherData;
  const { description, icon } = weather[0];
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
  };
  return { formatWeather };
};

export const getFormattedForecastData = async ({ cityForecast, unitsForecast }: IParamsForecast):
Promise<{ formatForecast: { list: IList[] } }> => {
  const forecast = await axios.get<IAxiosPromiseForecast>(`${BASE_URL}/forecast?q=${cityForecast}&appid=${API_KEY}&units=${unitsForecast}`)
    .then((res) => res.data);
  const {
    list,
  } = forecast;
  const formatForecast = {
    list,
  };
  return { formatForecast };
};
