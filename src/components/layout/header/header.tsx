import {ReactNode} from 'react';
import Logo from '../../ui/logo/logo.tsx';
import Nav from "../../blocks/nav/nav.tsx";

export default function Header():ReactNode{
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <Nav/>
        </div>
      </div>
    </header>
  );
}
