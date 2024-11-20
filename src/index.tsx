import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';

const OffersCount = {
  offersCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={OffersCount.offersCount}/>
  </React.StrictMode>
);
