import {ReactNode} from 'react';


export default function Logo() :ReactNode{
  return (
    <a className="header__logo-link header__logo-link--active">
      <img className="header__logo"
        src="/public/img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </a>
  );
}
