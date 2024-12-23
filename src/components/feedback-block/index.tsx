import { useEffect } from 'react';
import { useActions, useAppSelector } from '../../store/hooks';
import { CommentForm } from '../comment-form';
import { ReviewList } from '../review-list';
import { selectAuthReducerData, selectCommentsReducerData } from '../../store/selectors';
import { AuthorizationStatus } from '../../types/auth';
import { useErrorHandling } from '../../hooks/use-error-handling';

type Props = {
	offerId: string;
}

export const FeedbackBlock = ({ offerId }: Props) => {
  const { fetchOfferComments } = useActions();
  const { comments, fetchStatus: { error } } = useAppSelector(selectCommentsReducerData);
  const { authorizationStatus } = useAppSelector(selectAuthReducerData);
  const reviewsAmount = comments.length;

  useErrorHandling(error);

  useEffect(() => {
    fetchOfferComments({ offerId });
  }, [offerId, fetchOfferComments]);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
				Reviews &middot; <span className="reviews__amount">{reviewsAmount}</span>
      </h2>
      <ReviewList comments={comments} />
      {authorizationStatus === AuthorizationStatus.AUTHORIZED ? <CommentForm offerId={offerId} /> : ''}
    </section>
  );
};
