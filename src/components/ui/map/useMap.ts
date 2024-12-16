import {useEffect, useState, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {refType} from './map.tsx';
import {LeafletData} from '../../../data/leaflet-data.ts';
import {defaultCityType} from '../../../mocks/default-city.ts';

export function useMap(
  mapRef: refType,
  city: defaultCityType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: 12,
      });

      const layer = new TileLayer(
        LeafletData.TILELAYER,
        {
          attribution:
            LeafletData.ATTRIBUTION,
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
