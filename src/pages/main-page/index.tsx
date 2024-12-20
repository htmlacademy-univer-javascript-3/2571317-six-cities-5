import { useEffect } from 'react';
import { CityOffers } from '../../components';
import { CitiesList } from '../../components';
import { useActions, useAppSelector } from '../../store/hooks.ts';
import {
  selectAuthReducerData,
  selectCityName,
  selectOffersReducerData
} from '../../store/selectors.ts';
import { useSortedOffers } from '../../hooks/use-sorted-offers';
import { useErrorHandling } from '../../hooks/use-error-handling';

const MainPage = () => {
  const { fetchOffers } = useActions();
  const cityName = useAppSelector(selectCityName);
  const { offers, error } = useAppSelector(selectOffersReducerData);
  const { authorizationStatus } = useAppSelector(selectAuthReducerData);

  useErrorHandling(error);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers, cityName, authorizationStatus]);

  const sortedOffers = useSortedOffers(offers);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CitiesList />
      <CityOffers offers={sortedOffers} />
    </main>
  );
};

export default MainPage;
