import {Icon, Marker, layerGroup} from 'leaflet';
import {IMocksData} from '../../../mocks/offers.ts';
import {MutableRefObject, useEffect, useRef} from 'react';
import {useMap} from './useMap.ts';
import {defaultCityType} from '../../../mocks/default-city.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../../data/pin-url.ts';

export type refType = MutableRefObject<HTMLElement | null>
export type MapPropsType = {
  offers: IMocksData[];
  defaultCity: defaultCityType[];
  activeOffer: string;
  className: string;
  activeCity: string;
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

export function Map({offers, defaultCity, activeOffer, className, activeCity = 'Paris'}: MapPropsType) {

  const mapCity = defaultCity.find((item) => item.title === activeCity);
  const cityOffers: IMocksData[] = offers.filter((offer) => offer.city.name === activeCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef, mapCity);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
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

      return ():void => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cityOffers, activeOffer, mapCity, activeCity]);
  return (
    <section className={className} ref={mapRef}/>
  );
}

