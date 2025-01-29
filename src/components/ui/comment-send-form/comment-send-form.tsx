// noinspection JSDeprecatedSymbols

import {ChangeEvent, FormEvent, useState} from 'react';
import {RatingInputValues} from '../../../data/rating-input-values.ts';
import {CommentSendStarInput} from '../comment-send-star-input/comment-send-star-input.tsx';
import {createArrayFromObjectValues} from '../../../utility/utility.ts';
import {useAppDispatch, useAppSelector} from '../../../utility/hooks.ts';
import {sendCommentAction} from '../../../store/api-actions.ts';
import {useParams} from 'react-router-dom';
import {getReviewPostingStatus} from '../../../store/data-process/data-selectors.ts';
import {Status} from '../../../store/types.ts';

const ratingValuesList: number[] = createArrayFromObjectValues(RatingInputValues);
const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;
export type SendFormType = {
  comment: string;
  rating: number | null;
}

export function CommentSendForm(): JSX.Element{
  const {id: offerId} = useParams();
  const isCommentPosting = useAppSelector(getReviewPostingStatus);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
  });

  const isSubmitButtonDisabled: boolean = formData.rating === 0 || formData.comment.length < MIN_COMMENT_LENGTH
    || formData.comment.length > MAX_COMMENT_LENGTH
    || isCommentPosting === Status.Loading;

  const handleValueChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setFormData(evt.target.name === 'comment' ? {...formData, comment: value} : {...formData, rating: Number(value)});
    return formData;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (offerId){
      dispatch(sendCommentAction({offerId, formData}))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            setFormData({rating: 0, comment: ''});
          }
        });
    }
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
              isChecked={formData.rating === item}
            />))
        }
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleValueChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay
            with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitButtonDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}
