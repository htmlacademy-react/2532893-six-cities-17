import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/app.tsx';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {store} from './store';
import {fetchOffersAction, fetchAuthorizationStatus} from './store/api-actions.ts';


store.dispatch(fetchOffersAction());
store.dispatch(fetchAuthorizationStatus());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>
);

console.log(store.getState());
