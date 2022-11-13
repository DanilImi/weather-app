import { FC, useEffect, useState } from 'react';
import { IState } from './types/type/types';
import { getFormattedWeatherData } from './services/weatherServices';
import styles from './app.module.scss'
import Search from './components/Search/Search';
import Temperature from './components/Temperature/Temperature';
import Description from './components/Description/Description';
import { useNavigate } from 'react-router-dom';


const App:FC = () => {
  const navigate = useNavigate()
  const [city, setCity] = useState('brest')
  const [units, setUnits] = useState('metric')
  const [bg, setBg] = useState('')
  const [weather, setWeather] = useState<IState>()
  const [rain, setRain] = useState(styles.overlayNew)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({city, units})
      .then((data) => {
        console.log(data)
        setWeather(data.formatWeather)
        const differenceTemp = units === 'metric' ? 20 : 60
        data.formatWeather.temp <= differenceTemp ? setBg(styles.appNew) : setBg(styles.app)
        data.formatWeather.description.includes('rain') ? setRain(styles.overlay) : setRain(styles.overlayNew)
      })
      .catch((error) => {
        const err = error as Error
        console.log(err.message)
        navigate('/notfound')
      }) 
    }
    fetchWeather()
  }, [city, units])

  return (
    <div className={bg}>
      <div className={rain}>
        {
          weather && (
            
            <div className={styles.container}>
              <Search 
                setUnit={setUnits} 
                setCity={setCity} 
                setBool={true}
              />
              <Temperature 
                name={weather.name}
                country={weather.country}
                icon={weather.iconURL}
                description={weather.description}
                temp={weather.temp}
                unit={units}
                color={bg === styles.appNew ? true : false} 
              />
              <Description 
                weather={weather} 
                units={units}
                color={bg === styles.appNew ? true : false} 
              />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
