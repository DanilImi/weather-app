import { FC } from 'react';
import styles from './IconsPopup.module.scss';

interface IIconPopup {
  str: string
  name: string
  color: boolean
}

const IconsPopup: FC<IIconPopup> = ({str, name, color}) => {

  return (
    <ul className={styles.wrapper}>
      <li className={color ? styles.iconDark : styles.iconLight}>
        <span className={color ? styles.tooltipDark: styles.tooltipLight}>{name}</span>
        <span className={str === 'cloud' ? 'material-icons-outlined' : ''}>{str}</span>
      </li>
    </ul>
  )
}

export default IconsPopup