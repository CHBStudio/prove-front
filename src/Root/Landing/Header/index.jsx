import propTypes from 'prop-types';

import urls from 'config/urls';
import { SmallButton, SmallRedButton } from 'components/SmallButtons';
import { modals, user } from 'store';
import connect from 'utils/connect';
import history from 'utils/history';

import Link from './Link';

import styles from './styles.scss';


@connect({ modals, user })
export default class extends Component{

  static propTypes = {
    onClickLink: propTypes.func,
  };

  static defaultProps = {
    onClickLink: () => {},
  };

  constructor(props){
    super(props);
  }

  openLoginModal = () => this.props.actions.modals.openModal('login');

  openRegModal = () => this.props.actions.modals.openModal('registration');

  onClickLogo = () => {
    history.push(urls.landingAbout);
    this.props.onClickLink(urls.LANDING_PAGES.about);
  };

  render(){

    const { user } = this.props.store;

    const rightGroupToLogin = <div className={styles.rightGroup}>
      <SmallRedButton
        className={styles.regButton}
        onClick={this.openRegModal}
      >Регистрация</SmallRedButton>
      <SmallButton
        className={styles.enterButton}
        onClick={this.openLoginModal}
      >Вход</SmallButton>
    </div>;


    const rightGroupForUser = <div className={styles.rightGroup}>
      <SmallRedButton
        className={styles.regButton}
      >Личный кабинет</SmallRedButton>
      <SmallButton
        className={styles.enterButton}
        onClick={this.props.actions.user.userLogout}
      >Выход</SmallButton>
    </div>;


    const onClick = pageName => () => this.props.onClickLink(pageName);
    return <header className={styles.root}>
      <div className={styles.logo} onClick={this.onClickLogo}/>
      <Link onClick={onClick(urls.LANDING_PAGES.programs)} to={urls.landingPrograms}>Программы</Link>
      <Link onClick={onClick(urls.LANDING_PAGES.advantages)} to={urls.landingAdvantages}>Преимущества</Link>
      <Link onClick={onClick(urls.LANDING_PAGES.coach)} to={urls.landingCoach}>О тренере</Link>
      <Link onClick={onClick(urls.LANDING_PAGES.faq)} to={urls.landingFaq}>F.A.Q.</Link>
      <Link onClick={onClick(urls.LANDING_PAGES.results)} to={urls.landingResults}>Результаты</Link>
      { user.isLoggedIn ? rightGroupForUser : rightGroupToLogin }
    </header>

  }
}