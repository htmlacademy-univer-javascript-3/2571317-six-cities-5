import { SortVariant } from '../../../types/sort-variants';

export const decodeSortVariant = (variant: SortVariant) => {
  switch (variant) {
    case SortVariant.POPULAR:
      return 'Popular';
    case SortVariant.ASCENDING:
      return 'Price: low to high';
    case SortVariant.DESCENDING:
      return 'Price: high to low';
    case SortVariant.TOP:
      return 'Top rated first';
  }
};
