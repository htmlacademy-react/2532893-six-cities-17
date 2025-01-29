import {ReviewsItem} from '../reviews-item/reviews-item.tsx';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../utility/hooks.ts';
import {CommentsType} from '../../../store/types.ts';
import {useEffect} from 'react';
import {fetchCommentsAction} from '../../../store/api-actions.ts';
import {getCommentsList} from '../../../store/data-process/data-selectors.ts';
import {getSortedCommentsList} from '../../../utility/utility.ts';

const MAX_COMMENTS_COUNT = 10;

export function ReviewsList(){
  const {id: offerId} = useParams();
  const dispatch = useAppDispatch();
  const commentsList: CommentsType[] | null = useAppSelector(getCommentsList);
  useEffect(() => {
    if (offerId){
      dispatch(fetchCommentsAction(offerId));
    }
  }, [dispatch, offerId]);
  const sortedCommentsList = getSortedCommentsList(commentsList);

  return (
    <ul className="reviews__list">
      {sortedCommentsList && sortedCommentsList.map((review) => <ReviewsItem key={review.id} {...review}/>).slice(0, MAX_COMMENTS_COUNT)}
    </ul>
  );
}
