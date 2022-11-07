import { FC } from "react"
import { useNavigate } from "react-router-dom"
import styles from './NotFound.module.scss'

const NotFound:FC = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Oops! Page not found</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <button onClick={() => navigate(-1)}>Go back home</button>
      </div>    
    </div>
  )
}

export default NotFound