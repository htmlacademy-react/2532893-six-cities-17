import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import {offersCount} from './data/magic-numbers.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={offersCount}/>
  </React.StrictMode>
);
