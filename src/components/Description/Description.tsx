import { FC } from "react"
import { IState } from "../../types/type/types"
import styles from './Description.module.scss'

interface IDescription {
  weather: IState
  units: string
}

const Description: FC<IDescription> = ({weather, units}) => {
  const tempUnit = units === 'metric' ? '℃' : '℉'
  const windUnit = units === 'metric' ? 'm/s' : 'm/h'

  const cards = [
    {
      id: 1,
      icon: 'arrow_downward',
      title: 'min',
      data: weather.temp_min.toFixed(),
      unit: tempUnit 
    },
    {
      id: 2,
      icon: 'arrow_upward',
      title: 'max',
      data: weather.temp_max.toFixed(),
      unit: tempUnit 
    },
    {
      id: 3,
      icon: 'mood',
      title: 'feels like',
      data: weather.feels_like.toFixed(),
      unit: tempUnit 
    },
    {
      id: 4,
      icon: 'compress',
      title: 'pressure',
      data: weather.pressure.toFixed(),
      unit: "hPa" 
    },
    {
      id: 5,
      icon: 'opacity',
      title: 'humidity',
      data: weather.humidity.toFixed(),
      unit: "%" 
    },
    {
      id: 6,
      icon: 'air',
      title: 'wind speed',
      data: weather.speed.toFixed(),
      unit: windUnit 
    },
  ]
  
  return (
    <div className={styles.section_descriptions}>
      {cards.map(({id, icon, title, data, unit}) => (
        <div className={styles.card}>
          <div className={styles.description_cardIcon}>
            <span className='material-icons-outlined'>{icon}</span>
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}

    </div>
  )
}

export default Description