// noinspection JSDeprecatedSymbols

import React, {useState} from 'react';
import {RatingInputValues} from '../../../data/rating-input-values.ts';

export default function CommentSendForm(): JSX.Element{
  const [formData, setFormData] = useState({
    text: '',
  });
  const [ratingValue, setRatingValue] = useState(RatingInputValues.PERFECT);

  const handleFieldChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {value} = evt.target;
    setFormData({...formData, text: value});
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label"
        htmlFor="review"
      >Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={ratingValue === RatingInputValues.PERFECT}
          onChange={() => setRatingValue(RatingInputValues.PERFECT)}
        />
        <label htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image"
            width="37"
            height="33"
          >
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={ratingValue === RatingInputValues.GOOD}
          onChange={() => setRatingValue(RatingInputValues.GOOD)}
        />
        <label htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image"
            width="37"
            height="33"
          >
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={ratingValue === RatingInputValues.SATISFACTORY}
          onChange={() => setRatingValue(RatingInputValues.SATISFACTORY)}
        />
        <label htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image"
            width="37"
            height="33"
          >
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={ratingValue === RatingInputValues.BAD}
          onChange={() => setRatingValue(RatingInputValues.BAD)}
        />
        <label htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image"
            width="37"
            height="33"
          >
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={ratingValue === RatingInputValues.TERRIBLE}
          onChange={() => setRatingValue(RatingInputValues.TERRIBLE)}
        />
        <label htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image"
            width="37"
            height="33"
          >
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={false}
        >Submit
        </button>
      </div>
    </form>
  );
}
