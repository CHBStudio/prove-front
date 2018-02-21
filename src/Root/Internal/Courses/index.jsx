import { Switch, Route, Redirect } from 'react-router-dom';

import urls from 'config/urls';

import All from './All';
import My from './My';
import Page from './Page';


export default () => <Switch>
  <Route path={urls.internalCoursesMy} component={My}/>
  <Route path={urls.internalCoursesAll} component={All}/>
  <Route path={urls.internalCoursesPage(':id')} render={props => <Page id={props.match.params.id}/>}/>
  <Redirect to={urls.internalCoursesMy}/>
</Switch>