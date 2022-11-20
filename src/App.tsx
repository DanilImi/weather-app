import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IState } from './types/type/types';
import { getFormattedWeatherData } from './services/weatherServices';
import styles from './app.module.scss';
import Search from './components/Search/Search';
import Temperature from './components/Temperature/Temperature';
import Description from './components/Description/Description';
import Skeletons from './ui/Skeleton';

const App: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState('brest');
  const [units, setUnits] = useState('metric');
  const [bg, setBg] = useState(styles.appNew);
  const [weather, setWeather] = useState<IState>();
  const [rain, setRain] = useState(styles.overlayNew);

  useEffect(() => {
    setIsLoading(true);
    const fetchWeather = async (): Promise<void> => {
      await getFormattedWeatherData({ city, units })
        .then((data) => {
          setWeather(data.formatWeather);
          const differenceTemp = units === 'metric' ? 20 : 60;
          data.formatWeather.temp <= differenceTemp ? setBg(styles.appNew) : setBg(styles.app);
          data.formatWeather.description.includes('rain') ? setRain(styles.overlay) : setRain(styles.overlayNew);
          setIsLoading(false)
        });
    };
    fetchWeather().catch((error) => {
      const err = error as Error;
      console.log(err.message);
      navigate('/notfound');
      setIsLoading(false)
    });
  }, [city, units, navigate]);

  return (
    <div className={bg}>
      <div className={rain}>
        <div className={styles.container}>
          <Search
            setUnit={setUnits}
            setCity={setCity}
            setBool
          />
          {
            isLoading ? (
              <Skeletons />
            ) : (weather != null) && (
              <>
                <Temperature
                  name={weather.name}
                  country={weather.country}
                  icon={weather.iconURL}
                  description={weather.description}
                  temp={weather.temp}
                  unit={units}
                  color={bg === styles.appNew}
                />
                <Description
                  weather={weather}
                  units={units}
                  color={bg === styles.appNew}
                />
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default App;
