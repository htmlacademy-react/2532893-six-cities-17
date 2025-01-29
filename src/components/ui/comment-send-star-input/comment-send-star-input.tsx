// noinspection JSDeprecatedSymbols

import React from 'react';

type RatingStarsType = {
  onChange: React.ChangeEventHandler<HTMLElement>;
  value: number;
  isChecked: boolean;
}

export function CommentSendStarInput({onChange, value, isChecked}: RatingStarsType): JSX.Element{

  return(
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onChange} checked={isChecked}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
