import {ReactNode} from 'react';
import Logo from '../../ui/logo/logo.tsx';
import Nav from '../../blocks/nav/nav.tsx';
import {useLocation} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';

export default function Header():ReactNode{
  const {pathname} = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {pathname.includes(RoutePath.LOGIN)
            ? <Logo/>
            : <><Logo/><Nav/></>}
        </div>
      </div>
    </header>
  );
}