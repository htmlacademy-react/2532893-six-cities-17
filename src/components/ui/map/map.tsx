import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {IMocksData, IMocksDataProps} from '../../../mocks/offers.ts';
import React, {MutableRefObject, useEffect, useRef} from 'react';
import {useMap} from './useMap.ts';
import {URL_PIN} from '../../../data/pin-url.ts';
import {defaultCityType} from '../../../mocks/default-city.ts';

export type refType = MutableRefObject<HTMLElement | null>
export type MapPropsType = {
  offers: IMocksData[];
  defaultCity: defaultCityType;
}

export type useMapPropsType = {
  mapRef: refType;
  defaultCity: defaultCityType;
}

export function Map({offers, defaultCity}: MapPropsType) {
  const mapRef: refType = useRef(null);
  const map = useMap(mapRef, defaultCity);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_PIN.URL_PIN_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_PIN.URL_PIN_ACTIVE,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);
  return (
    <div
      style={{height: '921.594px'}}
      ref={mapRef}
    >
    </div>
  );
}

