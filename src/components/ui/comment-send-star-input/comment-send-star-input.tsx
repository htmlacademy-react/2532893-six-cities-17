import React, {useState} from 'react';

type RatingStarValuesType = {
  ratingValue: number;
  setRatingValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}
type RatingInputCheckedType = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export default function CommentSendStarInput({ratingValue, setRatingValue, value}: RatingStarValuesType): JSX.Element{
  const [checked, setChecked]: RatingInputCheckedType = useState(false);
  const checkValue = (): boolean => {
    if (ratingValue === value){
      setChecked(true);
    }
  };
  return(
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={checkValue}
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
