import {store} from './index.ts';

export type StateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch;

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
