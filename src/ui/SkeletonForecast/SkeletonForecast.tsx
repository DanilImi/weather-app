import { FC } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const SkeletonForecast: FC = () => {
  return (
    <Skeleton 
      count={7}
      height={50}
      baseColor='#1b1b1d'
      highlightColor='#2c2c2e'
    />
  )
}

export default SkeletonForecast