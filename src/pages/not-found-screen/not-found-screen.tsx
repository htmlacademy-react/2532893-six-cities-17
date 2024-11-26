// noinspection JSDeprecatedSymbols

import {Link} from 'react-router-dom';
import styles from './not-found-screen.module.css';

export default function NotFoundScreen(): JSX.Element{
  return(

    <div className={styles.container}>
      <h1 className={styles.title}>Ошибка!</h1>
      <p className={styles.text}>Запрашиваемая страница не найдена</p>
      <Link className={styles.link} to="/">Go to Main Page</Link>
    </div>

  );
}
