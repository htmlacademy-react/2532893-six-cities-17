// noinspection JSDeprecatedSymbols

import React from 'react';
import CityOffers from '../../components/blocks/city-offers/city-offers.tsx';
import Tabs from '../../components/blocks/tabs/tabs.tsx';
import Layout from '../../components/layout/layout/layout.tsx';
import {IMocksDataProps} from '../../mocks/offers.ts';
import {SetStateAction, useState} from 'react';

type ActiveOfferTupleType = [string, React.Dispatch<SetStateAction<string>>];


export default function MainScreen ({offers}:IMocksDataProps): JSX.Element{
  const [activeOffer, setActiveOffer]: ActiveOfferTupleType = useState('');
  const activeOfferHandler = (id: SetStateAction<string>): void => {
    setActiveOffer(id);
  };

  return (

    <div className="page page--gray page--main">
      <Layout/>
      {/*Заглушка для линтера*/}
      <div style={{display: 'none'}}>{activeOffer}</div>
      {/*Заглушка для линтера*/}
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Tabs offers={offers}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CityOffers offers={offers}
              onHandleActiveOfferChange={activeOfferHandler}
            />
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

