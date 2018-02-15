import urls from 'config/urls';

import Link from './Link';

import styles from './styles.scss';


export default ({ onClickLink=()=>{} }) => {
  const onClick = pageName => () => onClickLink(pageName);
  return <div className={styles.root}>
    <Link onClick={onClick(urls.LANDING_PAGES.about)} to={urls.landingAbout}>Программы</Link>
    <Link onClick={onClick(urls.LANDING_PAGES.coach)} to={urls.landingCoach}>О тренере</Link>
    <Link onClick={onClick(urls.LANDING_PAGES.faq)} to={urls.landingFaq}>FAQ</Link>
    <Link onClick={onClick(urls.LANDING_PAGES.results)} to={urls.landingResults}>Результаты</Link>
  </div>
}