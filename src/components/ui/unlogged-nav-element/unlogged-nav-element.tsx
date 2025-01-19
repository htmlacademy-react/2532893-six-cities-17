import {Link} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';


export function UnloggedNavElement(): JSX.Element {
  return (
    <span className="header__user-name user__name">
      <Link to={RoutePath.LOGIN}>Sign in</Link>
    </span>
  );
}
