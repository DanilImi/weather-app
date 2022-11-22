import { FC } from 'react';
import styles from './IconsPopup.module.scss';

interface IIconPopup {
  str: string
  name: string
}

const IconsPopup: FC<IIconPopup> = ({str, name}) => {

  return (
    <ul className={styles.wrapper}>
      <li className={styles.icon}>
        <span className={styles.tooltip}>{name}</span>
        <span className={str === 'cloud' ? 'material-icons-outlined' : ''}>{str}</span>
      </li>
    </ul>
  )
}

export default IconsPopup