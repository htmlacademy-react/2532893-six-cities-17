// noinspection JSDeprecatedSymbols

import {CityOffers} from '../city-offers/city-offers.tsx';
import {CityOfferPropsType} from '../city-offers/city-offers.tsx';
import {Map} from '../../ui/map/map.tsx';
import {DEFAULT_CITY} from '../../../mocks/default-city.ts';


export function Cities({offers, onHandleActiveOfferChange, activeOffer, activeCity}: CityOfferPropsType): JSX.Element{

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CityOffers offers={offers} onHandleActiveOfferChange={onHandleActiveOfferChange} activeCity={activeCity}/>
        <div className="cities__right-section">
          <Map defaultCity={DEFAULT_CITY} offers={offers} activeOffer={activeOffer} className={'cities__map map'}/>
        </div>
      </div>
    </div>
  );
}
