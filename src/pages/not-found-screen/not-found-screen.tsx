// noinspection JSDeprecatedSymbols

import {Link} from 'react-router-dom';
import styles from './not-found-screen.module.css';
import {Logo} from '../../components/ui/logo/logo.tsx';

export function NotFoundScreen(): JSX.Element{
  return(
    <>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Page not found</p>
        <Link className={styles.link} to="/">Go to Main Page</Link>
      </div>

    </>
  );
}
