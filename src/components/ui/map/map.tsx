import {Icon, Marker, layerGroup} from 'leaflet';
import {MutableRefObject, useEffect, useRef} from 'react';
import {useMap} from './useMap.ts';
import {defaultCityType} from '../../../data/cities-list.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../../data/pin-url.ts';
import {useAppSelector} from '../../../utility/hooks.ts';
import {getActiveCity} from '../../../store/offers-process/offers-selectors.ts';
import {OffersDataType} from '../../../store/types.ts';

export type refType = MutableRefObject<HTMLElement | null>
export type MapPropsType = {
  offers: OffersDataType[] | null;
  defaultCity: defaultCityType[];
  activeOffer: string;
  className: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function Map({offers, defaultCity, activeOffer, className}: MapPropsType) {
  const activeCityName = useAppSelector(getActiveCity);
  const mapCity: defaultCityType = defaultCity.find((item) => item.title === activeCityName) ?? defaultCity[0];
  const cityOffers: OffersDataType[] | null = offers && offers.filter((offer) => offer.city.name === activeCityName);
  const mapRef = useRef(null);
  const map = useMap(mapRef, mapCity);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      if(cityOffers){
        cityOffers.forEach((point) => {
          const marker = new Marker({
            lat: point.location.latitude,
            lng: point.location.longitude
          });

          marker
            .setIcon(
              activeOffer !== undefined && point.id === activeOffer
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerLayer);
        });
      }


      return ():void => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cityOffers, activeOffer, mapCity, activeCityName]);
  return (
    <section className={className} ref={mapRef}/>
  );
}

