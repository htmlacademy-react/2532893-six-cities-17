import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import {mocksData} from './data/mocks.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={mocksData} />
  </React.StrictMode>
);
