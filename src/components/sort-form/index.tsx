import { memo, useRef, useState } from 'react';
import { SortVariant } from '../../types/sort-variants';
import { useActions, useAppSelector } from '../../store/hooks';
import { selectSortVariant } from '../../store/selectors';
import { decodeSortVariant } from './utils';
import { SORT_VARIANTS } from './constants';
import styles from './styles.module.css';

export const SortForm = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { changeSortVariant } = useActions();
  const sortVariant = useAppSelector(selectSortVariant);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleFormVisibilityToggle = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  const handleMouseOver = () => {
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setIsOpen(true);
  };

  const handleSortVariantChange = (event: React.MouseEvent<HTMLUListElement>) => {
    changeSortVariant((event.target as HTMLLIElement).value as SortVariant);
    setIsOpen(false);
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className={`places__sorting-type ${styles.variant}`} tabIndex={0} onClick={handleFormVisibilityToggle}>
        {decodeSortVariant(sortVariant)}
        <svg role='presentation' className={`places__sorting-arrow ${isOpen ? undefined : `${styles.rotated} rotated`}`} width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul
          className="places__options places__options--custom places__options--opened"
          onClick={handleSortVariantChange}
          onMouseLeave={handleMouseOver}
          onMouseEnter={handleMouseEnter}
        >
          {
            SORT_VARIANTS.map((variant) => {
              const isActive = variant === sortVariant;

              return (
                <li
                  key={variant}
                  className={`places__option ${isActive ? 'places__option--active' : undefined}`}
                  tabIndex={0}
                  value={variant}
                >
                  {decodeSortVariant(variant)}
                </li>
              );
            })
          }
        </ul>
      )}
    </form>
  );
});

SortForm.displayName = 'SortForm';
