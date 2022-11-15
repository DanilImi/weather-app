import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import routesData from "./routesData";

const RoutesPath = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default RoutesPath