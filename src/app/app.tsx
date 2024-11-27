
// noinspection JSDeprecatedSymbols
// noinspection JSDeprecatedSymbols

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MainScreen from '../pages/main-screen/main-screen.tsx';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen.tsx';
import LoginScreen from '../pages/login-screen/login-screen.tsx';
import FavoriteScreen from '../pages/favorites-screen/favorite-screen.tsx';
import OfferScreen from '../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../components/routes/private-route/private-route.tsx';

import {RoutePath} from '../data/routes.ts';

type AppProps = {
  offersCount: number;
}


export default function App({offersCount}:AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.INDEX}>
          <Route index element={<MainScreen offersCount={offersCount}/>} />
          <Route
            path={RoutePath.LOGIN}
            element={
              <PrivateRoute>
                <LoginScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path={RoutePath.FAVORITES}
            element={
              <PrivateRoute>
                <FavoriteScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path={RoutePath.OFFER}
            element={<OfferScreen/>}
          />
          <Route
            path={RoutePath.NOT_FOUND}
            element={<NotFoundScreen/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
