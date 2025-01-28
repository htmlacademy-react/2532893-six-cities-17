
import {useAppDispatch, useAppSelector} from '../../../utility/hooks.ts';
import {useNavigate} from 'react-router-dom';
import {getAuthorizationStatus} from '../../../store/user-process/user-selectors.ts';
import {LoginStatus} from '../../../data/login-status.ts';
import {changeFavoriteStatus} from '../../../store/api-actions.ts';
import {RoutePath} from '../../../data/routes.ts';

type FavoriteButtonPropsType = {
    className: string;
    id: string;
    isFavorite: boolean;
    width: string;
    height: string;
};

export function FavoriteButton({className, id, isFavorite, width, height}: FavoriteButtonPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteClass = isFavorite ? `${className}__bookmark-button--active` : '';

  const handleFavoriteStatusChange = () => {
    const status = isFavorite ? 0 : 1;
    if (authorizationStatus === LoginStatus.Auth){
      dispatch(changeFavoriteStatus({id, status}));
    } else {
      navigate(RoutePath.LOGIN);
    }
  };

  return (
    <button
      className={`${className}__bookmark-button button ${favoriteClass}`}
      type="button"
      onClick={handleFavoriteStatusChange}
    >
      <svg className={`${className}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
