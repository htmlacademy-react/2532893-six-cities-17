
// noinspection JSDeprecatedSymbols

import {Link} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';


export function Logo() :JSX.Element{
  return (
    <div className="header__left">
      <Link to={RoutePath.INDEX}
        className="header__logo-link header__logo-link--active"
      >
        <img className="header__logo"
          src="/public/img/logo.svg"
          alt="6 cities logo"
          width="81"
          height="41"
        />
      </Link>
    </div>
  );
}
