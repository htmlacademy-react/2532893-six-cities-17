// noinspection JSDeprecatedSymbols

import {Layout} from '../../components/layout/layout/layout.tsx';
import {FormEvent, useRef} from 'react';
import {useAppDispatch} from '../../utility/hooks.ts';
import {AuthData} from '../../store/types.ts';
import {loginAction} from '../../store/api-actions.ts';
import {Link, useNavigate} from 'react-router-dom';
import {RoutePath} from '../../data/routes.ts';
import {getRandomCity} from '../../utility/utility.ts';
import {CITIES_LIST} from '../../data/cities-list.ts';
import {changeActiveCity} from '../../store/offers-process/offers-process.ts';

export function LoginScreen(): JSX.Element{
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const randomCity = getRandomCity(CITIES_LIST);

  const onSubmit = (authData: AuthData) => {
    try {
      dispatch(loginAction(authData));
      navigate(RoutePath.INDEX);
    } catch (error){
      return error;
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(loginRef.current !== null && passwordRef.current !== null){
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const handleCityClick = () => {
    dispatch(changeActiveCity(randomCity.title));
  };

  return (
    <div className="page page--gray page--login">
      <Layout/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input"
                  ref={loginRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input"
                  ref={passwordRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button"
                type="submit"
                onClick={() => handleSubmit}
              >Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={RoutePath.INDEX}
                onClick={handleCityClick}
              >
                <span>{randomCity.title}</span>
              </Link>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
