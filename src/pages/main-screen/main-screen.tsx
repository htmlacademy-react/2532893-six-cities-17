// noinspection JSDeprecatedSymbols

import CityOffers from '../../components/blocks/city-offers/city-offers.tsx';
import Header from '../../components/layout/header/header.tsx';
import Tabs from '../../components/blocks/tabs/tabs.tsx';
import {OFFERS_SHOW_COUNT} from '../../data/magic-numbers.ts';


export default function MainScreen (): JSX.Element{
  return (

    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Tabs/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CityOffers offersCount={OFFERS_SHOW_COUNT}/>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

