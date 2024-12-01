
import OfferMark from '../../ui/offer-mark/offer-mark.tsx';
import {IMocksData, IMocksDataProps} from '../../../mocks/offers.ts';

export default function FavoriteCard({offers}:IMocksDataProps){
  const offer: IMocksData = offers.filter((item) => item.isPremium);

  return (
    <article className="favorites__card place-card">

      {offer.isPremium ? <OfferMark status={'Premium'}/> : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image"
            src={offer.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Nice, cozy, warm big bed apartment</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
