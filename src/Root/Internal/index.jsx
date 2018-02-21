import { Switch, Route, Redirect } from 'react-router-dom';

import NavLink from 'components/NavLink'
import urls from 'config/urls';
import connect from 'utils/connect';
import history from 'utils/history';
import { user } from 'store';
import { SmallButton, SmallRedButton } from "components/SmallButtons/index";

import Courses from './Courses';

import styles from './styles.scss';


export default connect({ user })(({ actions }) => {

  return <div className={styles.root}>
    <div className={styles.leftBar}>
      <NavLink
        className={styles.link}
        to={urls.internalCoursesMy}
        activeClassName={styles.linkActive}
      >
        Мои
      </NavLink>
      <br/>
      <NavLink
        className={styles.link}
        to={urls.internalCoursesAll}
        activeClassName={styles.linkActive}
      >
        Все курсы
      </NavLink>
      <br/>
      <SmallRedButton
        className={styles.mainPage}
        onClick={() => history.push(urls.landing)}
      >
        Главная
      </SmallRedButton>
      <br/>
      <SmallButton
        onClick={actions.user.userLogout}
        className={styles.logout}
      >
        Выйти
      </SmallButton>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route path={urls.internalCourses} component={Courses}/>
        <Redirect to={urls.internalCourses}/>
      </Switch>
    </div>
  </div>
});