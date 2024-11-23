import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {OffersCount} from './data/magic-numbers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={OffersCount.offersCount}/>
  </React.StrictMode>
);
