import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import {offersData} from './mocks/offers.ts';
import {commentsData} from './mocks/review.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offersData} />
  </React.StrictMode>
);


