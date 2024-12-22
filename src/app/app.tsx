
// noinspection JSDeprecatedSymbols

import {BrowserRouter, Route, Routes,} from 'react-router-dom';

import {ActiveOfferTupleType, MainScreen} from '../pages/main-screen/main-screen.tsx';
import {NotFoundScreen} from '../pages/not-found-screen/not-found-screen.tsx';
import {LoginScreen} from '../pages/login-screen/login-screen.tsx';
import {FavoriteScreen} from '../pages/favorites-screen/favorite-screen.tsx';
import {OfferScreen} from '../pages/offer-screen/offer-screen.tsx';
import {PrivateRoute} from '../components/routes/private-route/private-route.tsx';

import {RoutePath} from '../data/routes.ts';
import {LoginStatus} from '../data/login-status.ts';
import {IMocksDataProps} from '../mocks/offers.ts';
import {FavoritesEmptyScreen} from '../pages/favorites-empty-screen/favorites-empty-screen.tsx';
import {SetStateAction, useState} from 'react';
import {useAppSelector} from '../utility/hooks.ts';

export function App({offers}: IMocksDataProps): JSX.Element {
  const [activeOffer, setActiveOffer]: ActiveOfferTupleType = useState('');
  const activeOfferHandler = (id: SetStateAction<string>): void => {
    setActiveOffer(id);
  };

  // const [activeCity, setActiveCity]: ActiveOfferTupleType = useState(DEFAULT_CITY[0].title);
  // const activeCityHandler = (value: SetStateAction<string>): void => {
  //   setActiveCity(value);
  // };

  const activeCity = useAppSelector((state) => state.cityName);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.INDEX}>
          <Route index element={<MainScreen offers={offers} activeOffer={activeOffer} onHandleActiveOfferChange={activeOfferHandler} activeCity={activeCity}/>}/>
          <Route
            path={RoutePath.LOGIN}
            element={<LoginScreen/>}
          />
          <Route
            path={RoutePath.FAVORITES}
            element={
              <PrivateRoute loginStatus={LoginStatus.Auth}>
                {offers.some((item) => item.isFavorite)
                  ? <FavoriteScreen offers={offers}/>
                  : <FavoritesEmptyScreen/>}
              </PrivateRoute>
            }
          />
          <Route
            path={RoutePath.OFFER}
            element={<OfferScreen offers={offers} activeOffer={activeOffer} onHandleActiveOfferChange={activeOfferHandler} activeCity={activeCity}/>}
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
