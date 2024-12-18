// noinspection JSDeprecatedSymbols
import {Layout} from '../../components/layout/layout/layout.tsx';
import {ReviewsList} from '../../components/blocks/reviews-list/reviews-list.tsx';
import {IMocksData} from '../../mocks/offers.ts';
import {useParams} from 'react-router-dom';
import {OfferMark} from '../../components/ui/offer-mark/offer-mark.tsx';
import {getCapitalizeWord} from '../../utility/utility.ts';
import {CommentSendForm} from '../../components/ui/comment-send-form/comment-send-form.tsx';

import {REVIEWS_LIST_DATA_MOCK} from '../../mocks/reviews.ts';
import {Map} from '../../components/ui/map/map.tsx';
import {DEFAULT_CITY} from '../../mocks/default-city.ts';
import {NEARBY_OFFERS_MOCK} from '../../mocks/nearby-offers.ts';

import {NearbyOffersList} from '../../components/blocks/nearby-offers-list/nearby-offers-list.tsx';
import {OfferInsideList} from '../../components/blocks/offer-inside-list/offer-inside-list.tsx';
import {SetStateAction} from 'react';
import {MARK_CLASS_NAMES} from "../../data/mark-class-names.ts";

export type MainOfferScreenProps = {
  offers: IMocksData[];
  onHandleActiveOfferChange: (id: SetStateAction<string>) => void;
  activeOffer: string;
  activeCity: string;
}
// noinspection JSDeprecatedSymbols
export function OfferScreen({offers, onHandleActiveOfferChange, activeOffer, activeCity}: MainOfferScreenProps): JSX.Element {

  const params = useParams();
  const offer: IMocksData | undefined = offers.find((item: IMocksData):boolean => item.id === params.id);

  return (

    <div className="page">
      <Layout/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image"
                  src="img/room.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image"
                  src="img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image"
                  src="img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image"
                  src="img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer?.isPremium ? <OfferMark className={MARK_CLASS_NAMES.OFFER_MARK} status={'Premium'}/>: null}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer && offer.title}
                </h1>
                <button className="offer__bookmark-button button"
                  type="button"
                >
                  <svg className="offer__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer?.rating ? Math.round(offer.rating) : null}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer?.type && getCapitalizeWord(offer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList/>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                    building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where
                    the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{REVIEWS_LIST_DATA_MOCK.length}</span></h2>
                <ReviewsList reviews={REVIEWS_LIST_DATA_MOCK}/>
                <CommentSendForm/>
              </section>
            </div>
          </div>
          <section className="offer__map map" style={{height: '579px'}}>
            {
              offer ? <Map offers={NEARBY_OFFERS_MOCK} defaultCity={DEFAULT_CITY} activeOffer={activeOffer} className={'offer__map map'} activeCity={activeCity}/> : null
            }
          </section>
        </section>
        <div className="container">
          <NearbyOffersList onHandleActiveOfferChange={onHandleActiveOfferChange}/>
        </div>
      </main>
    </div>
  );
}
