

import {Header} from '../header/header.tsx';
import {Outlet} from 'react-router-dom';

export function Layout():JSX.Element{
  return(
    <>
      <Header/>
      <Outlet/>
    </>
  );
}

