
// noinspection JSDeprecatedSymbols

import {RoutePath} from '../../data/routes.ts';
import Layout from '../../components/layout/layout/layout.tsx';
import {IMocksData, IMocksDataProps} from '../../mocks/offers.ts';
import FavoritesLocationsItem from '../../components/blocks/favorites-locations-item/favorites-locations-item.tsx';
import {createFavoriteGroups} from '../../utility/favorite-groups.ts';


export default function FavoriteScreen({offers}: IMocksDataProps): JSX.Element{
  const offerGroups = createFavoriteGroups(offers.filter((item) => item.isFavorite));

  return (
    <div className="page">
      <Layout/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {
                Object.keys(offerGroups).map((groupKey) => {
                  const group: IMocksData[] = offerGroups[groupKey];
                  return <FavoritesLocationsItem key={groupKey} offers={group} cityName={groupKey}/>;
                })
              }
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
