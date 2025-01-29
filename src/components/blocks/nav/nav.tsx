import {LoggedNavElement} from '../../ui/logged-nav-element/logged-nav-element.tsx';
import {UnloggedNavElement} from '../../ui/unlogged-nav-element/unlogged-nav-element.tsx';
import {useAppSelector} from '../../../utility/hooks.ts';
import {LoginStatus} from '../../../data/login-status.ts';
import {getAuthorizationStatus} from '../../../store/user-process/user-selectors.ts';


export function Nav():JSX.Element{

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === LoginStatus.Auth ? <LoggedNavElement/> : <UnloggedNavElement/>}
      </ul>
    </nav>
  );
}
