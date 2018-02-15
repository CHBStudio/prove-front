import { Route, Switch, Redirect } from 'react-router-dom';

import urls from 'config/urls';

import Landing from './Landing';

import './styles.scss';


export default () => {
  return <Switch>
    <Route path={urls.landing} component={Landing}/>
    <Redirect to={urls.landing}/>
  </Switch>
}