// noinspection JSDeprecatedSymbols

import CityOffers from '../../components/blocks/city-offers/city-offers.tsx';
// import {PlaceCardPropsType} from '../../components/blocks/place-card/place-card.tsx';
import Tabs from '../../components/blocks/tabs/tabs.tsx';
import Layout from '../../components/layout/layout/layout.tsx';
import {OffersCountProps} from '../../components/blocks/city-offers/city-offers.tsx';


export default function MainScreen ({offersCount}: OffersCountProps): JSX.Element{
  return (

    <div className="page page--gray page--main">
      <Layout locationHref={window.location.href}/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Tabs/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CityOffers offersCount={offersCount}/>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

