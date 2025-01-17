import {useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';
import {logoutAction} from '../../../store/api-actions.ts';
import {useAppDispatch} from '../../../utility/hooks.ts';


export function Nav():JSX.Element{
  const ref = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogoutSubmit = () => {
    dispatch(logoutAction());
  };

  const handleSubmit = () => {
    onLogoutSubmit();
    navigate(RoutePath.LOGIN);
  };
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
            <Link to={RoutePath.LOGIN}>
              <span className="header__signout"
                ref={ref}
                onClick={handleSubmit}
              >Sign out
              </span>
            </Link>
          </a>
        </li>
      </ul>
    </nav>
  );
}
