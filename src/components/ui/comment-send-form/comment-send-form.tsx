// noinspection JSDeprecatedSymbols

import React, {useState} from 'react';
import {RatingInputValues} from '../../../data/rating-input-values.ts';
import {CommentSendStarInput} from '../comment-send-star-input/comment-send-star-input.tsx';
import {createArrayFromObjectValues} from '../../../utility/utility.ts';

const ratingValuesList: number[] = createArrayFromObjectValues(RatingInputValues);

export function CommentSendForm(): JSX.Element{

  const [formData, setFormData] = useState({
    text: '',
    rating: '',
  });

  const handleValueChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {value} = evt.target;
    if (evt.target.type === 'textarea'){
      setFormData({...formData, text: value});
    }
    setFormData({...formData, rating: value});

  };


  return (
    <form className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label htmlForm__label"
        htmlFor="review"
      >Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingValuesList.map((item: number) => <CommentSendStarInput value={item} onChange={handleValueChange} key={item}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleValueChange}
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
