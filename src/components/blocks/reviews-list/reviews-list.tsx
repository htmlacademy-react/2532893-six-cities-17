import {ReviewsItem} from '../reviews-item/reviews-item.tsx';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../utility/hooks.ts';
import {CommentsType} from '../../../store/types.ts';
import {useEffect} from 'react';
import {fetchCommentsAction} from '../../../store/api-actions.ts';
import {getCommentsList} from '../../../store/data-process/data-selectors.ts';

export function ReviewsList(){
  const {id: offerId} = useParams();
  const dispatch = useAppDispatch();
  const commentsList: CommentsType[] | null = useAppSelector(getCommentsList);
  useEffect(() => {
    if (offerId){
      dispatch(fetchCommentsAction(offerId));
    }
  }, [dispatch, offerId]);
  return (
    <ul className="reviews__list">
      {commentsList && commentsList.map((review) => <ReviewsItem key={review.id} {...review}/>)}
    </ul>
  );
}
