// noinspection JSDeprecatedSymbols

import {Link} from 'react-router-dom';
import {OfferMark} from '../../ui/offer-mark/offer-mark.tsx';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';
import {MARK_CLASS_NAMES} from '../../../data/mark-class-names.ts';
import {SetStateAction} from 'react';
import {OffersDataType} from '../../../store/types.ts';
import {FavoriteButton} from '../../ui/favorite-button/favorite-button.tsx';
import {
  favoriteButtonClassNames,
  SMALL_FAVORITE_BUTTON_HEIGHT,
  SMALL_FAVORITE_BUTTON_WIDTH
} from '../../../data/favorite-button-data.ts';


export type CardPropsType = Pick<OffersDataType, 'isPremium' | 'price' | 'previewImage' | 'id' | 'isFavorite'>;

export type PlaceCardPropsType = CardPropsType & {
  className: string;
  onHandleActiveOfferChange(id: SetStateAction<string>): void;
}

export function PlaceCard({isPremium, previewImage, price, id, className, onHandleActiveOfferChange, isFavorite}:PlaceCardPropsType): JSX.Element {

  return (
    <article className={`${className}__card place-card`}
      onMouseEnter={() => onHandleActiveOfferChange(id)}
      onMouseLeave={() => onHandleActiveOfferChange('')}
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
          <FavoriteButton className={favoriteButtonClassNames.placeCardButton} id={id} isFavorite={isFavorite} width={SMALL_FAVORITE_BUTTON_WIDTH} height={SMALL_FAVORITE_BUTTON_HEIGHT}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            Beautiful &amp; luxurious apartment at great location
          </Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );

}
