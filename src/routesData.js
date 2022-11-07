import App from './App'
import NotFound from './components/NotFound/NotFound'

const routesData = [
  {
    path: '/',
    component: <App />,
  },
  {
    path: '/notfound',
    component: <NotFound />,
  },
]

export default routesData