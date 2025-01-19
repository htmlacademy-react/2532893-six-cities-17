
// noinspection JSDeprecatedSymbols

import {BrowserRouter, Route, Routes,} from 'react-router-dom';

import {ActiveOfferTupleType, MainScreen} from '../pages/main-screen/main-screen.tsx';
import {NotFoundScreen} from '../pages/not-found-screen/not-found-screen.tsx';
import {LoginScreen} from '../pages/login-screen/login-screen.tsx';
import {FavoriteScreen} from '../pages/favorites-screen/favorite-screen.tsx';
import {OfferScreen} from '../pages/offer-screen/offer-screen.tsx';
import {PrivateRoute} from '../components/routes/private-route/private-route.tsx';
import {LoadingElement} from '../components/ui/loading-element/loading-element.tsx';

import {RoutePath} from '../data/routes.ts';
import {LoginStatus} from '../data/login-status.ts';
import {IMocksData} from '../mocks/offers.ts';
import {FavoritesEmptyScreen} from '../pages/favorites-empty-screen/favorites-empty-screen.tsx';
import {SetStateAction, useState} from 'react';
import {useAppSelector} from '../utility/hooks.ts';
import OfferNotLoggedScreen from '../pages/offer-not-logged-screen/offer-not-logged-screen.tsx';

export function App(): JSX.Element {
  const offersList: IMocksData[] = useAppSelector((store) => store.offers);
  const [activeOffer, setActiveOffer]: ActiveOfferTupleType = useState('');
  const activeOfferHandler = (id: SetStateAction<string>): void => {
    setActiveOffer(id);
  };
  const isLoading: boolean = useAppSelector((state) => state.isOffersDataLoading);
  const authorizationStatus: LoginStatus = useAppSelector((state) => state.authorizationStatus);

  if (isLoading) {
    return (
      <LoadingElement/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.INDEX}>
          <Route index element={<MainScreen offers={offersList} onHandleActiveOfferChange={activeOfferHandler} activeOffer={activeOffer}/>}/>
          <Route
            path={RoutePath.LOGIN}
            element={<LoginScreen/>}
          />
          <Route
            path={RoutePath.FAVORITES}
            element={
              <PrivateRoute loginStatus={authorizationStatus}>
                {offersList.some((item) => item.isFavorite)
                  ? <FavoriteScreen offers={offersList}/>
                  : <FavoritesEmptyScreen/>}
              </PrivateRoute>
            }
          />
          <Route
            path={RoutePath.OFFER}
            element={authorizationStatus === LoginStatus.Auth ? <OfferScreen activeOffer={activeOffer}/> : <OfferNotLoggedScreen/>}
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
