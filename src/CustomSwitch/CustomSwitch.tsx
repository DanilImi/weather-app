import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Routes, useLocation } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator';


const CustomSwitch: FC<PropsWithChildren> = ({children}) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState('')
  const location = useLocation()
  TopBarProgress.config({
    barColors: {
      '0': '#fff',
      '1.0': '#ff0000'
    }
  })
  useEffect(() => {
    setPrevLoc(location.pathname)
    setProgress(true)
    if(location.pathname === prevLoc) {
      setPrevLoc('')
    }
  }, [location])

  useEffect(() => {
    setProgress(false)
  }, [prevLoc])

  return (
    <>
      {progress && <TopBarProgress />}
      <Routes>{children}</Routes>
    </>
  )
}

export default CustomSwitch;
