// noinspection JSDeprecatedSymbols

import {CityOffers} from '../city-offers/city-offers.tsx';
import {CityOfferPropsType} from '../city-offers/city-offers.tsx';
import {Map} from '../../ui/map/map.tsx';
import {DEFAULT_CITY} from '../../../mocks/default-city.ts';


export function Cities({offers, onHandleActiveOfferChange, activeOffer}: CityOfferPropsType): JSX.Element{

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CityOffers offers={offers} onHandleActiveOfferChange={onHandleActiveOfferChange}/>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map defaultCity={DEFAULT_CITY} offers={offers} activeOffer={activeOffer}/>
          </section>
        </div>
      </div>
    </div>
  );
}
