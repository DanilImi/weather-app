import ReactDOM from 'react-dom/client';
import './index.scss';
import RoutesPath from './Routes';
import './i18n';
import { Suspense } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Suspense fallback={<div>loading...</div>}>
    <RoutesPath />
  </Suspense>
);
