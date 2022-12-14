import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IDescription } from '../../types/type/typesDescription';
import styles from './Description.module.scss';

const Description: FC<IDescription> = ({ weather, units, color }) => {
  const { t } = useTranslation();
  const tempUnit = units === 'metric' ? '℃' : '℉';
  const windUnit = units === 'metric' ? 'm/s' : 'm/h';

  const minMax = useMemo(() => [
    {
      id: 1,
      icon: 'arrow_downward',
      title: t('min'),
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: 'arrow_upward',
      title: t('max'),
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
  ], [weather, tempUnit, t]);
  const cards = useMemo(() => [
    {
      id: 1,
      icon: 'mood',
      title: t('feel_like'),
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: 'compress',
      title: t('pressure'),
      data: weather.pressure.toFixed(),
      unit: 'hPa',
    },
    {
      id: 3,
      icon: 'opacity',
      title: t('humidity'),
      data: weather.humidity.toFixed(),
      unit: '%',
    },
    {
      id: 4,
      icon: 'air',
      title: t('wind_speed'),
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ], [weather, windUnit, tempUnit, t]);
  return (
    <>
      <div className={styles.section_line}>
        {minMax.map(({
          id, icon, title, data, unit,
        }) => (
          <div className={color ? styles.card_line_dark : styles.card_line_light} key={id}>
            <div className={styles.description_cardLine}>
              <span className="material-icons-outlined">{icon}</span>
              <small>{title}</small>
            </div>
            <div className={styles.data}>{`${data}${unit}`}</div>
          </div>
        ))}
      </div>
      <div className={color ? styles.section_container_dark : styles.section_container_light}>
        <div className={styles.title}>Today</div>
        <div className={styles.section_descriptions}>
          {cards.map(({
            id, icon, title, data, unit,
          }) => (
            <div className={styles.card} key={id}>
              <div className={styles.description_cardIcon}>
                <span className="material-icons-outlined">{icon}</span>
                <small>{title}</small>
              </div>
              <div className={styles.containerData}>
                <div className={styles.data}>{`${data}`}</div>
                <div className={styles.data}>{`${unit}`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Description;
