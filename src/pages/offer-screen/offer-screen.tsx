// noinspection JSDeprecatedSymbols
import {Layout} from '../../components/layout/layout/layout.tsx';
import {ReviewsList} from '../../components/blocks/reviews-list/reviews-list.tsx';
import {useNavigate, useParams} from 'react-router-dom';
import {OfferMark} from '../../components/ui/offer-mark/offer-mark.tsx';
import {getCapitalizeWord} from '../../utility/utility.ts';
import {CommentSendForm} from '../../components/ui/comment-send-form/comment-send-form.tsx';
import {OfferImage} from '../../components/blocks/offer-image/offer-image.tsx';

import {Map} from '../../components/ui/map/map.tsx';
import {CITIES_LIST} from '../../mocks/cities-list.ts';

import {NearbyOffersList} from '../../components/blocks/nearby-offers-list/nearby-offers-list.tsx';
import {OfferInsideList} from '../../components/blocks/offer-inside-list/offer-inside-list.tsx';
import {MARK_CLASS_NAMES} from '../../data/mark-class-names.ts';
import {useAppDispatch, useAppSelector} from '../../utility/hooks.ts';
import {useEffect} from 'react';
import {fetchCurrentOfferAction} from '../../store/api-actions.ts';
import {RoutePath} from '../../data/routes.ts';
import {LoginStatus} from '../../data/login-status.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-selectors.ts';
import {getCurrentOffer} from '../../store/offers-process/offers-selectors.ts';
import {FavoriteButton} from '../../components/ui/favorite-button/favorite-button.tsx';
import {
  BIG_FAVORITE_BUTTON_HEIGHT,
  BIG_FAVORITE_BUTTON_WIDTH,
  favoriteButtonClassNames
} from '../../data/favorite-button-data.ts';
import {getCommentsList, getNearbyOffersList} from '../../store/data-process/data-selectors.ts';

export type MainOfferScreenProps = {
  activeOffer: string;
}

export function OfferScreen({activeOffer}: MainOfferScreenProps): JSX.Element {

  const {id: offerId} = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getCurrentOffer);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getCommentsList);
  const nearbyOffersList = useAppSelector(getNearbyOffersList);
  const navigate = useNavigate();

  useEffect(() => {
    if(offerId){
      dispatch(fetchCurrentOfferAction(offerId));
    } else {
      navigate(RoutePath.NOT_FOUND);
    }
  }, [dispatch, offerId, navigate]);

  return (

    <div className="page">
      <Layout/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer && offer.images.map((item) => <OfferImage imageSRC={item} key={item}/>)}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer && offer.isPremium && <OfferMark className={MARK_CLASS_NAMES.OFFER_MARK} status={'Premium'}/>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer && offer.title}
                </h1>
                {offer && <FavoriteButton className={favoriteButtonClassNames.offerPageButton} isFavorite={offer.isFavorite} id={offer.id} width={BIG_FAVORITE_BUTTON_WIDTH} height={BIG_FAVORITE_BUTTON_HEIGHT}/>}

              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer && Math.round(offer.rating)}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer && offer.type && getCapitalizeWord(offer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer && offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer && offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer && offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList goods={offer && offer.goods} />
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar"
                      src={offer && offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {offer && offer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {offer && offer.host.isPro && 'Pro'}
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews && reviews.length}</span></h2>
                <ReviewsList/>
                {authorizationStatus === LoginStatus.Auth && <CommentSendForm/>}
              </section>
            </div>
          </div>
          <section className="offer__map map" style={{height: '579px'}}>
            {
              offer && <Map offers={offer && nearbyOffersList} defaultCity={CITIES_LIST} activeOffer={activeOffer} className={'offer__map map'}/>
            }
          </section>
        </section>
        <div className="container">
          <NearbyOffersList/>
        </div>
      </main>
    </div>
  );
}
