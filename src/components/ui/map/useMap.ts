import {useEffect, useState, useRef} from 'react';
import leaflet from 'leaflet';
import {refType} from './map.tsx';
import {LeafletData} from '../../../data/leaflet-data.ts';
import {defaultCityType} from '../../../mocks/default-city.ts';

export function useMap(mapRef: refType, city: defaultCityType) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          LeafletData.TILELAYER,
          {
            attribution: LeafletData.ATTRIBUTION,
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

