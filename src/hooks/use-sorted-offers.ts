import {useMemo} from 'react';
import {Offer} from '../types/offer.ts';
import {SortVariant} from '../types/sort-variants.ts';
import {useAppSelector} from '../store/hooks.ts';
import {selectSortVariant} from '../store/selectors.ts';

export const useSortedOffers = (offers: Offer[]): Offer[] => {
  const sortVariant = useAppSelector(selectSortVariant);

  return useMemo(() => [...offers].sort((a, b) => {
    switch (sortVariant) {
      case SortVariant.ASCENDING:
        return a.price - b.price;
      case SortVariant.DESCENDING:
        return b.price - a.price;
      case SortVariant.TOP:
        return b.rating - a.rating;
      case SortVariant.POPULAR:
        return 0;
    }
  }), [offers, sortVariant]);
};
