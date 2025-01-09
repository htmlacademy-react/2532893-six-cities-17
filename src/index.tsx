import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/app.tsx';
import {ErrorMessage} from './components/ui/error-message/error-message.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchOffersAction, fetchAuthorizationStatus} from './store/api-actions.ts';

store.dispatch(fetchAuthorizationStatus());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);


