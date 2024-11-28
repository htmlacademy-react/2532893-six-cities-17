// noinspection JSDeprecatedSymbols

import Header from '../header/header.tsx';
import Logo from '../../ui/logo/logo.tsx';
import {RoutePath} from '../../../data/routes.ts';
import {Outlet} from 'react-router-dom';

type LocationHrefType = {
  locationHref: string;
}

export default function Layout({locationHref}: LocationHrefType):JSX.Element{
  return(
    <>
      {locationHref.includes(RoutePath.LOGIN) ? <Logo/> : <Header/>}
      <Outlet/>
    </>
  );
}

