import { FC } from "react"
import styles from './Temperature.module.scss'

interface ITemperature {
  name: string
  country: string
  icon: string
  description: string
  temp: number
  unit: string
}

const Temperature:FC<ITemperature> = ({name, country, icon, description, temp, unit}) => {
  return (
    <div className={styles.section_temperature}>
      <div className={styles.icon}>
        <h3>{`${name}, ${country}`}</h3>
        <img src={icon} alt=''/>
        <h3>{description}</h3>
      </div>
      <div className='temperature'>
        <h1>{`${temp.toFixed()} ${unit === 'metric' ? '℃' : '℉'}`}</h1>
      </div>
    </div>
  )
}

export default Temperature