import { FC } from 'react';
import { ITemperature } from '../../types/type/typesTemp';
import styles from './Temperature.module.scss';

const Temperature: FC<ITemperature> = ({
  name, country, icon, description, temp, unit, color,
}) => {
  return(
    <div className={color ? styles.section_temperature_dark : styles.section_temperature_light}>
      <div className={styles.icon}>
        <h3>{`${name}, ${country}`}</h3>
        <img src={icon} alt="" />
        <h3>{description}</h3>
      </div>
      <div className="temperature">
        <h1>{`${temp.toFixed()} ${unit === 'metric' ? '℃' : '℉'}`}</h1>
      </div>
    </div>
  );
}

export default Temperature;
