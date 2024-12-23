import { useMatch } from 'react-router-dom';
import { AppRoutes } from '../constants/routes.ts';

type PageSettings = {
	hasFooter: boolean;
	hasHeader: boolean;
	isLightHeader: boolean;
	pageContainerClassName: string;
};

const pageContainerClasses = {
  [AppRoutes.DEFAULT]: 'page--gray page--main',
  [AppRoutes.LOGIN]: 'page--gray page--login',
  [AppRoutes.FAVORITES]: 'page--favorites-empty'
};

export const usePageSettings = (): PageSettings => {
  const isMainPage = useMatch(AppRoutes.DEFAULT)?.pathname === AppRoutes.DEFAULT;
  const isFavoritesPage = useMatch(AppRoutes.FAVORITES)?.pathname === AppRoutes.FAVORITES;
  const isSignInPage = useMatch(AppRoutes.LOGIN)?.pathname === AppRoutes.LOGIN;

  let pageContainerClassName = '';

  if (isMainPage) {
    pageContainerClassName = pageContainerClasses[AppRoutes.DEFAULT];
  } else if (isSignInPage) {
    pageContainerClassName = pageContainerClasses[AppRoutes.LOGIN];
  } else if (isFavoritesPage) {
    pageContainerClassName = pageContainerClasses[AppRoutes.FAVORITES];
  }

  return {
    hasFooter: isFavoritesPage,
    hasHeader: true,
    isLightHeader: isSignInPage,
    pageContainerClassName
  };
};
