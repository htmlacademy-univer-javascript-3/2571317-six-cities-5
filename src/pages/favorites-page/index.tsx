import { useMemo } from 'react';
import { Offer } from '../../types/offer.ts';
import { OffersList } from '../../components';
import { useAppSelector } from '../../store/hooks.ts';
import { selectFavoriteOffersReducerData } from '../../store/selectors.ts';
import { NoFavoritesOffers } from '../../components/no-favorites-offers';
import styles from './styles.module.css';

const FavoritesPage = () => {
  const {
    favoritesOffers
  } = useAppSelector(selectFavoriteOffersReducerData);

  const offersSplittedByCity = useMemo(() => favoritesOffers.reduce((acc, currOffer) => {
    if (!acc[currOffer.city.name]) {
      acc[currOffer.city.name] = [];
    }
    acc[currOffer.city.name].push(currOffer);
    return acc;
  }, {} as Record<Offer['city']['name'], Offer[]>), [favoritesOffers]);

  if (!favoritesOffers.length) {
    return (
      <NoFavoritesOffers />
    );
  }

  return (
    <main className={`page__main page__main--favorites ${styles.page}`}>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.keys(offersSplittedByCity).length && Object.entries(offersSplittedByCity).map(([cityName, cityOffers]) => (
              <li className="favorites__locations-items" key={cityName}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{cityName}</span>
                    </a>
                  </div>
                </div>
                {cityOffers.length && <OffersList offers={cityOffers} type='favorites' />}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default FavoritesPage;
