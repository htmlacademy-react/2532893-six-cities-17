// noinspection JSDeprecatedSymbols

import React from 'react';
import {Tabs} from '../../components/blocks/tabs/tabs.tsx';
import {Layout} from '../../components/layout/layout/layout.tsx';
import {IMocksDataProps} from '../../mocks/offers.ts';
import {SetStateAction, useState} from 'react';
import {Cities} from '../../components/blocks/cities/cities.tsx';
import {MainEmptyBlock} from '../../components/blocks/main-empty-block/main-empty-block.tsx';

export type ActiveOfferTupleType = [string, React.Dispatch<SetStateAction<string>>];


export function MainScreen ({offers}:IMocksDataProps): JSX.Element{
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
            <Tabs />
          </section>
        </div>
        {offers.length ? <Cities offers={offers} onHandleActiveOfferChange={activeOfferHandler} activeOffer={activeOffer}/> : <MainEmptyBlock/>}
      </main>
    </div>
  );
}

