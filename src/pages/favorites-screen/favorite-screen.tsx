
// noinspection JSDeprecatedSymbols

import FavoriteCard from '../../components/blocks/favorite-card/favorite-card.tsx';
import {RoutePath} from '../../data/routes.ts';
import Layout from '../../components/layout/layout/layout.tsx';
import {IMocksData, IMocksDataProps} from '../../mocks/offers.ts';

export default function FavoriteScreen({offers}: IMocksDataProps): JSX.Element{
  const favoriteOffers: IMocksData[] = offers.filter((item) => item.isFavorite);
  return (
    <div className="page">
      <Layout/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link"
                      href="#"
                    >
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoriteOffers.length ? offers.map((item) => <FavoriteCard offers={offers} key={item.id}/>) : null}

                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link"
                      href="#"
                    >
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">

                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link"
          href={RoutePath.INDEX}
        >
          <img className="footer__logo"
            src="/markup/img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}
