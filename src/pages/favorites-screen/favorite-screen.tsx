
// noinspection JSDeprecatedSymbols

import {RoutePath} from '../../data/routes.ts';
import Layout from '../../components/layout/layout/layout.tsx';
import {IMocksData, IMocksDataProps} from '../../mocks/offers.ts';
import FavoritesLocationsItem from '../../components/blocks/favorites-locations-item/favorites-locations-item.tsx';
import {createUniqueCityList} from '../../utility/utility.ts';


export default function FavoriteScreen({offers}: IMocksDataProps): JSX.Element{
  const favoriteOffers: IMocksData[] = offers.filter((item) => item.isFavorite);
  const uniqueOffers: string[] = createUniqueCityList(favoriteOffers);

  return (
    <div className="page">
      <Layout/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {uniqueOffers.length && uniqueOffers.map((item) => <FavoritesLocationsItem offers={offers} key={item}/>)}

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
