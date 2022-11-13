import { 
  FC, 
  useEffect, 
  useState 
} from "react"
import { 
  Accordion, 
  AccordionItem, 
  AccordionItemPanel, 
  AccordionItemHeading, 
  AccordionItemButton
} from "react-accessible-accordion"
import { useNavigate } from "react-router-dom"
import { getFormattedForecastData, makeIconUrl } from "../../services/weatherServices"
import { IForecast } from "../../types/type/types"
import { WEEK_DAYS } from "../../utils/weekDays"
import Search from "../Search/Search"
import styles from './Forecast.module.scss'


const Forecast:FC = () => {
  const navigate = useNavigate()
  const [cityForecast, setCity] = useState('brest')
  const [unitsForecast, setUnits] = useState('metric')

  const [forecast, setForecast] = useState<IForecast>()
  const dayInWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))
  const tempUnit = unitsForecast === 'metric' ? '℃' : '℉'
  const windUnit = unitsForecast === 'metric' ? 'm/s' : 'm/h'


  useEffect(() => {
    const fetchForecast = async () => {
      await getFormattedForecastData({cityForecast, unitsForecast})
      .then((data) => {
        console.log(data)
        setForecast(data.formatForecast)
      })
      .catch((error) => {
        const err = error as Error
        console.log(err.message)
        navigate('/notfound')
      }) 
    }
    fetchForecast()
  }, [cityForecast, unitsForecast])

  return (
    <div className={styles.container}>
      <Search 
        setCity={setCity} 
        setUnit={setUnits} 
        setBool={false}
      />
      <label className={styles.title}>Daily</label>
      <Accordion allowZeroExpanded>
        {forecast?.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.dailyItem}>
                  <img className={styles.iconSmall} src={makeIconUrl(item.weather[0].icon)} alt="forecast" />
                  <label className={styles.day}>{forecastDays[idx]}</label>
                  <label className={styles.description}>{item.weather[0].description}</label>
                  <label className={styles.minMax}>{`${Math.round(item.main.temp_min)} ${tempUnit} / ${Math.round(item.main.temp_max)} ${tempUnit}`}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.dailyDetailsGrid}>
                <div>
                  <label className='material-icons-outlined'>compress</label>
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div>
                  <label className='material-icons-outlined'>opacity</label>
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div>
                  <label className='material-icons-outlined'>cloud</label>
                  <label>Clouds</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div>
                  <label className='material-icons-outlined'>air</label>
                  <label>Wind speed:</label>
                  <label>{`${item.wind.speed} ${windUnit}`}</label>
                </div>
                <div>
                  <label className='material-icons-outlined'>water</label>
                  <label>Sea level:</label>
                  <label>{`${item.main.sea_level} m`}</label>
                </div>
                <div>
                  <label className='material-icons-outlined'>mood</label>
                  <label>Feels like:</label>
                  <label>{`${Math.round(item.main.feels_like)} ${tempUnit}`}</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default Forecast