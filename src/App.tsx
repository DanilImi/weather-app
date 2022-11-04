import { FC, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { IState } from './types/type/types';
import { getFormattedWeatherData } from './services/weatherServices';
import './App.css';
import hotBg from './images/photo-1575881875475-31023242e3f9.jpg'
import coldBg from './images/img.jpg'


const App:FC = () => {

  const [city, setCity] = useState('brest')
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState<IState>()

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({city, units})
      .then((data) => {
        console.log(data)
        setWeather(data)
      })
      .catch((error) => {
        const err = error as AxiosError | Error
        return err.message
      }) 
    }
    fetchWeather()
  }, [city, units])

  weather && console.log(weather.weather.weather[0].id)
  return (
    <div className="App" style={{backgroundImage: `url(${coldBg})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section_inputs'>
            <input type='text' name='city' placeholder='Enter City...'/>
            <button>F</button>
          </div>
          <div className='section section_temperature'>
            <div className='icon'>
              <h3></h3>
              <img src='' alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
