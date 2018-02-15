import { NavLink } from 'react-router-dom';

import styles from './styles.scss'


export default ({ children, to, className, activeClassName='' }) => {
  return <NavLink
    className={cn(styles.root, className)}
    to={to}
    activeClassName={activeClassName}
  >
    { children }
  </NavLink>
}