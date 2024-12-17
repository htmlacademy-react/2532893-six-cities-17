import {ReviewsItem} from '../reviews-item/reviews-item.tsx';
import {ReviewsPropsType} from "../reviews-item/reviews-item.tsx";

export function ReviewsList({reviews}: ReviewsPropsType){
  return (
    <ul className="reviews__list">
      {reviews.length && reviews.map((review) => <ReviewsItem key={review.id} {...review}/>)}
    </ul>
  );
}
