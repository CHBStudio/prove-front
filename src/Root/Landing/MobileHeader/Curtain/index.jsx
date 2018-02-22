import CloseButton from 'components/CloseButton';
import Link from 'components/NavLink';
import { SmallButton, SmallRedButton } from "components/SmallButtons";
import urls from 'config/urls';
import history from 'utils/history';

import styles from './styles.scss';


export default ({
  isHidden,
  onClose,
  onClick=()=>{},
  onRegistrationClick=()=>{},
  onLoginClick=()=>{},
  isLoggedIn,
  onLogout=()=>{},
}) => {
  return <div className={cn(styles.root, isHidden && styles.rootHidden)}>
    <CloseButton className={styles.closeBtn} onClick={onClose}/>
    <Link activeClassName={styles.linkActive} className={styles.link} onClick={onClick(urls.LANDING_PAGES.programs)} to={urls.landingPrograms}>Программы</Link>
    <br/>
    <Link activeClassName={styles.linkActive} className={styles.link} onClick={onClick(urls.LANDING_PAGES.advantages)} to={urls.landingAdvantages}>Преимущества</Link>
    <br/>
    <Link activeClassName={styles.linkActive} className={styles.link} onClick={onClick(urls.LANDING_PAGES.coach)} to={urls.landingCoach}>О тренере</Link>
    <br/>
    <Link activeClassName={styles.linkActive} className={styles.link} onClick={onClick(urls.LANDING_PAGES.faq)} to={urls.landingFaq}>F.A.Q.</Link>
    <br/>
    <Link activeClassName={styles.linkActive} className={styles.link} onClick={onClick(urls.LANDING_PAGES.results)} to={urls.landingResults}>Результаты</Link>
    <br/>
    { !isLoggedIn && <SmallRedButton
      className={styles.regBtn}
      onClick={onRegistrationClick}
    >Регистрация</SmallRedButton> }
    { isLoggedIn && <SmallRedButton
      className={styles.regBtn}
      onClick={() => history.push(urls.internalCourses)}
    >Личный кабинет</SmallRedButton> }
    <br/>
    { !isLoggedIn &&<SmallButton
      className={styles.loginBtn}
      onClick={onLoginClick}
    >Вход</SmallButton> }
    { isLoggedIn &&<SmallButton
      className={styles.loginBtn}
      onClick={onLogout}
    >Выход</SmallButton> }
  </div>
}