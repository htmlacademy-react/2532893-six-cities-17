// noinspection JSDeprecatedSymbols

import {CityOffers} from '../city-offers/city-offers.tsx';
import {CityOfferPropsType} from '../city-offers/city-offers.tsx';
import {Map} from '../../ui/map/map.tsx';
import {CITIES_LIST} from '../../../mocks/cities-list.ts';


export function Cities({offers, onHandleActiveOfferChange, activeOffer}: CityOfferPropsType): JSX.Element{

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CityOffers offers={offers} onHandleActiveOfferChange={onHandleActiveOfferChange}/>
        <div className="cities__right-section">
          <Map defaultCity={CITIES_LIST} offers={offers} className={'cities__map map'} activeOffer={activeOffer}/>
        </div>
      </div>
    </div>
  );
}
