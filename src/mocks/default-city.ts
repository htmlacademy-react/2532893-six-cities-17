export type defaultCityType = {
    title: string;
    lat: number;
    lng: number;
    zoom: number;
}

export const DEFAULT_CITY: defaultCityType[] = [{
  title: 'Paris',
  lat: 48.8595107,
  lng: 2.3356635,
  zoom: 12,
}, {
  title: 'Cologne',
  lat: 50.9389716,
  lng: 6.954893,
  zoom: 12,
},{
  title: 'Brussels',
  lat: 50.8468679,
  lng: 4.35522115,
  zoom: 12,
},{
  title: 'Amsterdam',
  lat: 52.3653713,
  lng: 4.9025705,
  zoom: 12,
},{
  title: 'Hamburg',
  lat: 53.5517667,
  lng: 10.0066494,
  zoom: 12,
},{
  title: 'Dusseldorf',
  lat: 51.2087825,
  lng: 6.7370844,
  zoom: 12,
}];
