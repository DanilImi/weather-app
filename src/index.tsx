import ReactDOM from 'react-dom/client';
import './index.scss';
import RoutesPath from './Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <RoutesPath />,
);
