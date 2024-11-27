import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element{
  const isLogged: boolean = true;
  return (
    isLogged ? children : <Navigate to={'/login'}/>
  );
}
