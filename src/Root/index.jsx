import { Route, Switch, Redirect } from 'react-router-dom';

import urls from 'config/urls';
import connect from 'utils/connect';
import { user, landing } from 'store';

import Landing from './Landing';
import Internal from './Internal';
import LoadingScreen from './LoadingScreen';

import ModalLogin from './ModalLogin';
import ModalRegistration from './ModalRegistration';

import styles from './styles.scss';


@connect({ user, landing })
export default class extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount () {
    this.props.actions.user.userGet();
    this.props.actions.landing.landingGet();
  };

  render(){

    const { user, landing } = this.props.store;

    const isLoading = user.isLoading || landing.isLoading;
    const isLoaded = user.isLoaded && landing.isLoaded;

    return <div className={styles.root}>
      <LoadingScreen isHidden={!isLoading}/>
      { isLoaded && <Switch>
        <Route path={urls.landing} render={() => <Landing
          user={user}
          landing={landing}
        />}/>
        { user.isLoggedIn && <Route path={urls.internal} component={Internal}/> }
        <Redirect to={urls.landing}/>
      </Switch> }
      <ModalLogin/>
      <ModalRegistration/>
    </div>;
  }
}