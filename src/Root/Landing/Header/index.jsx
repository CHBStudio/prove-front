import propTypes from 'prop-types';

import urls from 'config/urls';
import RedButton from 'components/RedButton';
import Button from 'components/Button';

import Link from './Link';

import styles from './styles.scss';



export default class extends Component{

  static propTypes = {
    onClickLink: propTypes.func,
  };

  static defaultProps = {
    onClickLink: () => {},
  };

  constructor(props){
    super(props);

    this.state = {
      showHeader: false,
    }
  }

  mouseMoveListener = (e) => {
    if(window.innerHeight / e.screenY > 3 && !this.state.showHeader){
      this.setState({ showHeader: true });
      return;
    }

    if(window.innerHeight / e.screenY <= 3 && this.state.showHeader){
      this.setState({ showHeader: false });
      return;
    }
  };

  componentDidMount(){
    window.addEventListener('mousemove', this.mouseMoveListener);
  }

  render(){
    const onClick = pageName => () => this.props.onClickLink(pageName);
    return <header className={cn(styles.root, !this.state.showHeader && styles.rootHidden)}>
      <div className={styles.logo}/>
      <Link onClick={onClick(urls.LANDING_PAGES.about)} to={urls.landingAbout}>Программы</Link>
      <Link onClick={onClick(urls.LANDING_PAGES.coach)} to={urls.landingCoach}>О тренере</Link>
      <Link onClick={onClick(urls.LANDING_PAGES.faq)} to={urls.landingFaq}>FAQ</Link>
      <Link onClick={onClick(urls.LANDING_PAGES.results)} to={urls.landingResults}>Результаты</Link>

      <div className={styles.rightGroup}>
        <RedButton className={styles.regButton}>Регистрация</RedButton>
        <Button className={styles.enterButton}>Вход</Button>
      </div>
    </header>

  }

  componentWillUnmount(){
    window.removeEventListener('mousemove', this.mouseMoveListener);
  }
}