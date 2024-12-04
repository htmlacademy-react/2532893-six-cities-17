import FavoriteCard from '../favorite-card/favorite-card.tsx';
import {IMocksData, IMocksDataProps} from '../../../mocks/offers.ts';
import {createUniqueCityList} from '../../../utility/utility.ts';


// noinspection JSDeprecatedSymbols
export default function FavoritePlaces({offers}: IMocksDataProps): JSX.Element{
  const favoriteOffers: IMocksData[] = offers.filter((item) => item.isFavorite);
  const uniqueOffers: string[] = createUniqueCityList(favoriteOffers);
  return (
    <div className="favorites__places">
      {uniqueOffers.length ? uniqueOffers.map((item) => (<FavoriteCard offers={offers} key={item}/>)) : null}
    </div>
  );
}
