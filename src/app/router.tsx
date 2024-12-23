import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/private-route';
import { AppRoutes } from '../constants/routes.ts';
import { useActions, useAppSelector } from '../store/hooks.ts';
import { Layout } from '../components/layout';
import { selectAuthReducerData } from '../store/selectors.ts';
import { AuthorizationStatus } from '../types/auth.ts';

const MainPage = lazy(() => import('../pages/main-page'));
const LoginPage = lazy(() => import('../pages/login-page'));
const FavoritesPage = lazy(() => import('../pages/favorites-page'));
const OfferPage = lazy(() => import('../pages/offer-page'));
const Page404 = lazy(() => import('../pages/404'));

export const Router = () => {
  const { checkAuthStatus, fetchFavoritesOffers } = useActions();
  const { authorizationStatus } = useAppSelector(selectAuthReducerData);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTHORIZED) {
      fetchFavoritesOffers();
    }
  }, [authorizationStatus, fetchFavoritesOffers]);

  return (
    <Suspense>
      <Routes>
        <Route path={AppRoutes.DEFAULT} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.FAVORITES} element={(
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          )}
          />
          <Route path={AppRoutes.OFFER} element={<OfferPage />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};
