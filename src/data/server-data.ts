export const BASE_URL: string = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT: number = 5000;
export const TIMEOUT_SHOW_ERROR: number = 2000;

export enum APIRoutes {
  OFFERS = '/offers',
  FAVORITE = '/favorite',
  COMMENTS = '/comments/:id',
  LOGIN = '/login',
  LOGOUT = '/logout',
}
