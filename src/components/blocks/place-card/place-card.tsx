// noinspection JSDeprecatedSymbols

import {IMocksData} from '../../../mocks/offers.ts';
import {Link} from 'react-router-dom';
import {RoutePath} from '../../../data/routes.ts';
import {OfferMark} from '../../ui/offer-mark/offer-mark.tsx';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';
import {MARK_CLASS_NAMES} from '../../../data/mark-class-names.ts';
import {useAppDispatch} from '../../../utility/hooks.ts';
import {showActiveOffer} from '../../../store/action.ts';

export type CardPropsType = Pick<IMocksData, 'isPremium' | 'price' | 'previewImage' | 'id'>;

export type PlaceCardPropsType = CardPropsType & {
  className: string;
}

export function PlaceCard({isPremium, previewImage, price, id, className}:PlaceCardPropsType): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article className={`${className}__card place-card`}
      onMouseEnter={() => dispatch(showActiveOffer(id))}
      onMouseLeave={() => dispatch(showActiveOffer(''))}
    >
      {isPremium && <OfferMark className={MARK_CLASS_NAMES.PLACE_CARD_MARK} status={'Premium'}/>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className={className === CARD_CLASS_NAMES.FAVORITES_CARD ? `${CARD_CLASS_NAMES.FAVORITES_CARD}__card-info place-card__info` : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button"
            type="button"
          >
            <svg className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={RoutePath.OFFER}>
            Beautiful &amp; luxurious apartment at great location
          </Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );

}
