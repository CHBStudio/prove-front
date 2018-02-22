import propTypes from 'prop-types';

import { modals, user } from 'store';
import connect from 'utils/connect';
import history from 'utils/history';

import Curtain from './Curtain';

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

    this.state = {
      isOpen: false,
    }
  }

  openLoginModal = () => {
    this.props.actions.modals.openModal('login');
    this.close();
  };

  openRegModal = () => {
    this.props.actions.modals.openModal('registration');
    this.close();
  };

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  render(){
    const { isOpen } = this.state;

    const onClick = pageName => () => {
      this.props.onClickLink(pageName);
      this.close();
    };

    const { user } = this.props.store;

    return <header className={styles.root}>
      <Curtain
        isHidden={!isOpen}
        onClose={this.close}
        onClick={onClick}
        onLoginClick={this.openLoginModal}
        onRegistrationClick={this.openRegModal}
        isLoggedIn={user.isLoggedIn}
        onLogout={this.props.actions.user.userLogout}
      />
      <div className={styles.menu} onClick={this.open}/>
      <div className={styles.logo}/>
    </header>
  }
}