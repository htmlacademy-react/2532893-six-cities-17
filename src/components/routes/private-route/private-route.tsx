// noinspection JSDeprecatedSymbols

import {Navigate} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';

import {LoginStatus} from "../../../data/login-status.ts";

type PrivateRouteProps = {
  children: JSX.Element;
  loginStatus: LoginStatus;
}

export default function PrivateRoute({children, loginStatus}: PrivateRouteProps): JSX.Element{

  return (
    loginStatus ? children : <Navigate to={RoutePath.LOGIN}/>
  );
}
