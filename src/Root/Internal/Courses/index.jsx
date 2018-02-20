import { Switch, Route, Redirect } from 'react-router-dom';

import urls from 'config/urls';

import All from './All';
import My from './My';


export default () => <Switch>
  <Route path={urls.internalCoursesMy} component={My}/>
  <Route path={urls.internalCoursesAll} component={All}/>
  <Redirect to={urls.internalCoursesMy}/>
</Switch>