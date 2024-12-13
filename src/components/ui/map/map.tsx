import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {IMocksData} from '../../../mocks/offers.ts';
import {MutableRefObject, useEffect, useRef} from 'react';
import {useMap} from './useMap.ts';
import {defaultCityType} from '../../../mocks/default-city.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../../data/pin-url.ts';

export type refType = MutableRefObject<HTMLElement | null>
export type MapPropsType = {
  offers: IMocksData[];
  defaultCity: defaultCityType;
  activeOffer: string;
}


export function Map({offers, defaultCity, activeOffer}: MapPropsType) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultCity);

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
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((point) => {
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
  }, [map, offers, activeOffer]);
  return (
    <section className="cities__map map" ref={mapRef}/>
  );
}

