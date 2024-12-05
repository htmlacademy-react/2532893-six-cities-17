// noinspection JSDeprecatedSymbols

import CityOffers from '../../components/blocks/city-offers/city-offers.tsx';
import Tabs from '../../components/blocks/tabs/tabs.tsx';
import Layout from '../../components/layout/layout/layout.tsx';
import {IMocksDataProps} from '../../mocks/offers.ts';
import {useState} from 'react';


export default function MainScreen ({offers}:IMocksDataProps): JSX.Element{
  const [activeOffer, setActiveOffer] = useState(null);
  const activeOfferHandler = (id: string | null): void => {
    setActiveOffer(id);
  };
  console.log(activeOffer);

  return (

    <div className="page page--gray page--main">
      <Layout />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Tabs offers={offers}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CityOffers offers={offers} onHandleActiveOfferChange={activeOfferHandler}/>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

