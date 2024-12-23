import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useActions, useAppSelector } from '../../store/hooks.ts';
import { selectAuthReducerData, selectOfferInfoReducerData } from '../../store/selectors.ts';
import { AppRoutes } from '../../constants/routes.ts';
import { useErrorHandling } from '../../hooks/use-error-handling';
import { NearestOffers, OfferInfo } from '../../components';

const OfferPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { fetchOfferInfo } = useActions();
  const { offerInfo, error } = useAppSelector(selectOfferInfoReducerData);
  const { authorizationStatus } = useAppSelector(selectAuthReducerData);

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchOfferInfo({ offerId: id });
  }, [fetchOfferInfo, id, authorizationStatus]);

  const handleNotFoundPageNavigate = () => navigate(AppRoutes.NOT_FOUND);

  useErrorHandling(error, handleNotFoundPageNavigate);

  return (
    <main className="page__main page__main--offer">
      <OfferInfo offerInfo={offerInfo} />
      <NearestOffers offerInfo={offerInfo} />
    </main>
  );
};

export default OfferPage;
