// noinspection JSDeprecatedSymbols

import React, {useState} from 'react';
import {RatingInputValues} from '../../../data/rating-input-values.ts';
import CommentSendStarInput from '../comment-send-star-input/comment-send-star-input.tsx';
import {createArrayFromEnumValues} from '../../../utility/utility.ts';

const ratingValuesList: number[] = createArrayFromEnumValues(RatingInputValues);
type RatingValuesTupleType = [number, React.Dispatch<React.SetStateAction<number>>]

export default function CommentSendForm(): JSX.Element{
  const [formData, setFormData] = useState({
    text: '',
  });
  const [ratingValue, setRatingValue]: RatingValuesTupleType = useState(RatingInputValues.PERFECT);

  const handleFieldChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {value} = evt.target;
    setFormData({...formData, text: value});
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
        {ratingValuesList.map((item: number) => <CommentSendStarInput value={item} ratingValue={ratingValue} setRatingValue={setRatingValue} key={item}/>)}
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
