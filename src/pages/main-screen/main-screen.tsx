// noinspection JSDeprecatedSymbols

import React from 'react';
import {Tabs} from '../../components/blocks/tabs/tabs.tsx';
import {Layout} from '../../components/layout/layout/layout.tsx';
import {SetStateAction} from 'react';
import {Cities} from '../../components/blocks/cities/cities.tsx';
import {MainEmptyBlock} from '../../components/blocks/main-empty-block/main-empty-block.tsx';
import {IMocksData} from '../../mocks/offers.ts';
import {store} from '../../store';

export type ActiveOfferTupleType = [string, React.Dispatch<SetStateAction<string>>];
export type MainScreenProps = {
  offers: IMocksData[];
  onHandleActiveOfferChange(id: SetStateAction<string>): void;
  activeOffer: string;
}

export function MainScreen ({offers, onHandleActiveOfferChange, activeOffer}:MainScreenProps): JSX.Element{
  console.log(store.getState());

  return (

    <div className="page page--gray page--main">
      <Layout/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Tabs/>
          </section>
        </div>
        {offers.length ? <Cities offers={offers} onHandleActiveOfferChange={onHandleActiveOfferChange} activeOffer={activeOffer}/> : <MainEmptyBlock/>}
      </main>
    </div>
  );
}

