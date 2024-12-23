import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/routes';
import styles from './styles.module.css';

const Page404 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(AppRoutes.DEFAULT, { replace: true });
  };

  return (
    <div className={styles.page}>
      <h1>Page Not Found</h1>
      <button className={styles.backButton} onClick={handleButtonClick}>Go to home page</button>
    </div>
  );
};

export default Page404;
