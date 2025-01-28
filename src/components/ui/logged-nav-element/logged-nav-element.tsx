import {Link, useNavigate} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';
import {useRef} from 'react';
import {logoutAction} from '../../../store/api-actions.ts';
import {useAppDispatch, useAppSelector} from '../../../utility/hooks.ts';
import {getUserData} from '../../../store/user-process/user-selectors.ts';
import {getFavoritesList} from '../../../store/favorite-process/favorite-selectors.ts';
import {setFavoritesList} from '../../../store/favorite-process/favorite-process.ts';


export function LoggedNavElement(): JSX.Element{
  const favoritesCount = useAppSelector(getFavoritesList).length;
  const userData = useAppSelector(getUserData);
  const ref = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onLogoutSubmit = () => {
    dispatch(logoutAction());
    dispatch(setFavoritesList([]));
  };

  const handleSubmit = () => {
    onLogoutSubmit();
    navigate(RoutePath.LOGIN);
  };
  return (
    <>
      <li className="header__nav-item user">

        <a className="header__nav-link header__nav-link--profile"
          href="#"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>

          <span className="header__user-name user__name">
            <Link to={RoutePath.FAVORITES}>{userData?.email}</Link>
          </span>
          <span className="header__favorite-count">{favoritesCount}</span>
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
    </>
  );
}
