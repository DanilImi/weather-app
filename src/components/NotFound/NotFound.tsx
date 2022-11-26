import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>{t('notFound')}</h2>
        <h1>404</h1>
        <p>{t('descriptionNotFound')}</p>
        <button onClick={() => navigate(-1)}>{t('goBack')}</button>
      </div>
    </div>
  );
};

export default NotFound;
