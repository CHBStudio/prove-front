import NavLink from 'components/NavLink';

import styles from './styles.scss';


export default ({ children, to, onClick }) => {
  return <NavLink onClick={onClick} to={to} className={styles.root} activeClassName={styles.rootActive}>
    { children }
    <span className={styles.line}/>
  </NavLink>
}