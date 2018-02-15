import NavLink from 'components/NavLink';

import styles from './styles.scss';


export default ({ children, to }) => {
  return <NavLink to={to} className={styles.root} activeClassName={styles.rootActive}>
    { children }
    <span className={styles.line}/>
  </NavLink>
}