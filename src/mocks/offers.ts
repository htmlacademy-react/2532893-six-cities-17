
type AccommodationTypesType = 'apartment' | 'room' | 'house' | 'hotel';
export type CityNameTypes = string;

export interface IMocksData {
  id: string;
  title: string;
  type: AccommodationTypesType;
  price: number;
  previewImage: string;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export interface IMocksDataProps {
  offers: IMocksData[];
}

