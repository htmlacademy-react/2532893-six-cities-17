import React from 'react';

type RatingStarValuesType = {
  ratingValue: number;
  setRatingValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}

export default function CommentSendStarInput({ratingValue, setRatingValue, value}: RatingStarValuesType): JSX.Element{
  return(
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={ratingValue === value}
        onChange={() => setRatingValue(value)}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
