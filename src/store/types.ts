import {store} from './index.ts';

export type StateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch;

type AccommodationTypesType = 'apartment' | 'room' | 'house' | 'hotel';

export type CityNameTypes = string;


export type OffersDataType = {
  id: string;
  title: string;
  type: AccommodationTypesType;
  price: number;
  previewImage: string;
  city: {
    name: CityNameTypes;
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
};

export type CurrentOfferDataType = {
  id: string;
  title: string;
  type: string;
  price: number;
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
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type CommentsType = {
    id: string;
    date: string;
    user: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
    comment: string;
    rating: number;
};

export type CommentType = {
  comment: string;
  rating: null | number;
};

export enum Status {
  Idle = 'Idle',
  Loading= 'Loading',
  Success = 'Success',
  Error = 'Error',
}
