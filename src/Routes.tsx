import {
  HashRouter,
  Route,
} from 'react-router-dom';
import CustomSwitch from './CustomSwitch/CustomSwitch';
import routesData from './routesData';

function RoutesPath(): JSX.Element {
  return (
    <HashRouter>
      <CustomSwitch>
        {routesData.map((route) => (
          <Route
            path={route.path}
            element={route.component}
            key={`route ${route.path}`}
          />
        ))}
      </CustomSwitch>
    </HashRouter>
  );
}

export default RoutesPath;
