import { FC, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { IState } from './types/type/types';
import { getFormattedWeatherData } from './services/weatherServices';
import './App.scss';
import hotBg from './images/photo-1575881875475-31023242e3f9.jpg'
import coldBg from './images/img.jpg'
import Search from './components/Search/Search';
import Temperature from './components/Temperature/Temperature';
import Description from './components/Description/Description';


const App:FC = () => {

  const [city, setCity] = useState('brest')
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState<IState>()

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({city, units})
      .then((data) => {
        console.log(data)
        setWeather(data.formatWeather)
      })
      .catch((error) => {
        const err = error as AxiosError | Error
        return err.message
      }) 
    }
    fetchWeather()
  }, [city, units])

  return (
    <div className="App" style={{backgroundImage: `url(${coldBg})`}}>
      <div className='overlay'>
        {
          weather && (
            <div className='container'>
              <Search setUnit={setUnits} setCity={setCity}/>
              <Temperature 
                name={weather.name}
                country={weather.country}
                icon={weather.iconURL}
                description={weather.description}
                temp={weather.temp}
                unit={units} 
              />
              {/* buttom description */}
              <Description weather={weather} units={units}/>
          </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
