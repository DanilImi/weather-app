
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import routesData from "./routesData";

const RoutesPath = () => {
  return (
    <Router>
      <Routes>
        {routesData.map(route => {
          return (
            <Route 
              path={route.path}
              element={route.component}
              key={`route ${route.path}`}
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default RoutesPath