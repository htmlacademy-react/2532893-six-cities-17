// noinspection JSDeprecatedSymbols

import {ChangeEvent, FormEvent, useState} from 'react';
import {RatingInputValues} from '../../../data/rating-input-values.ts';
import {CommentSendStarInput} from '../comment-send-star-input/comment-send-star-input.tsx';
import {createArrayFromObjectValues} from '../../../utility/utility.ts';
import {useAppDispatch} from '../../../utility/hooks.ts';
import {sendCommentAction} from '../../../store/api-actions.ts';
import {useParams} from 'react-router-dom';

const ratingValuesList: number[] = createArrayFromObjectValues(RatingInputValues);
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;
export type SendFormType = {
  comment: string;
  rating: number | null;
}

export function CommentSendForm(): JSX.Element{
  const {id: offerId} = useParams();
  const dispatch = useAppDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
  });

  const checkButtonDisabledConditions = (): void => {
    if (formData.comment.length >= MIN_COMMENT_LENGTH && formData.comment.length < MAX_COMMENT_LENGTH && formData.rating !== 0) {
      setButtonDisabled(false);
    }
  };

  const handleValueChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    checkButtonDisabledConditions();
    if (evt.target.name === 'rating'){
      setFormData((prevState) => ({...prevState, rating: +evt.target.value}));
    }
    setFormData((prevState) => ({...prevState, comment: evt.target.value}));
    return formData;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(sendCommentAction({offerId, formData}));
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label htmlForm__label"
        htmlFor="review"
      >Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          ratingValuesList.map((item: number) => (
            <CommentSendStarInput onChange={handleValueChange}
              key={item}
              value={item}
            />))
        }
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleValueChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay
            with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={buttonDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}
