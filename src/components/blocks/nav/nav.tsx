import {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';


export function Nav():ReactNode{
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile"
            href="#"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">
              <Link to={RoutePath.FAVORITES}>Oliver.conner@gmail.com</Link>
            </span>
            <span className="header__favorite-count">3</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link"
            href="#"
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
