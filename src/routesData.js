import App from './App'
import NotFound from './components/NotFound/NotFound'
import Forecast from './components/Forecast/Forecast'

const routesData = [
  {
    path: '/',
    component: <App />,
  },
  {
    path: '/notfound',
    component: <NotFound />,
  },
  {
    path: '/forecast',
    component: <Forecast />,
  },
]

export default routesData