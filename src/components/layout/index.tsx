import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { usePageSettings } from '../../hooks/use-page-settings';

export const Layout = () => {
  const {
    hasHeader,
    hasFooter,
    isLightHeader,
    pageContainerClassName
  } = usePageSettings();

  return (
    <div className={`page ${pageContainerClassName}`}>
      {hasHeader && <Header withNav={!isLightHeader} />}
      <Outlet />
      {hasFooter && <Footer />}
    </div>
  );
};

