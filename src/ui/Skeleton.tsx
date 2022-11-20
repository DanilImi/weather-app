import { FC } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './Skeletons.module.scss';

const Skeletons: FC = () => {
  return (
    <>
      <Skeleton 
        count={1}
        height={170}
        borderRadius='0.4rem'
        baseColor='#1b1b1d'
        highlightColor='#2c2c2e'
      />
      <div className={styles.containerSkeleton}>
        <Skeleton 
          count={1}
          className={styles.skeleton}
          borderRadius='0.4rem'
          baseColor='#1b1b1d'
          highlightColor='#2c2c2e'
        />
        <Skeleton 
          count={1}
          className={styles.skeleton}
          borderRadius='0.4rem'
          baseColor='#1b1b1d'
          highlightColor='#2c2c2e'
        />
      </div>
      <Skeleton 
        count={1}
        height={217}
        borderRadius='0.4rem'
        baseColor='#1b1b1d'
        highlightColor='#2c2c2e'
      />
    </>
  )
}

export default Skeletons