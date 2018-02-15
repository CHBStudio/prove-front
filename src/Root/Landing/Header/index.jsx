import urls from 'config/urls';

import Link from './Link';

import styles from './styles.scss';


export default () => {
  return <div className={styles.root}>
    <Link to={urls.landingAbout}>Программы</Link>
    <Link to={urls.landingCoach}>О тренере</Link>
    <Link to={urls.landingFaq}>FAQ</Link>
    <Link to={urls.landingResults}>Результаты</Link>
  </div>
}