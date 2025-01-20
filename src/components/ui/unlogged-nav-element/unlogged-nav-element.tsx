import {Link} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';


export function UnloggedNavElement(): JSX.Element {

  return (
    <Link to={RoutePath.LOGIN}>
      <span className="header__user-name user__name">
     Sign in
      </span>
    </Link>
  );
}
