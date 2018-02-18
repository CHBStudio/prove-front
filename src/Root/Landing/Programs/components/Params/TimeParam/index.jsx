import styles from './styles.scss';
import Param from '../Param';
import clockIcon from './icons/icon.svg';


export default ({ children, className }) => <Param
  backgroundImage={clockIcon}
  iconClassName={styles.icon}
  className={className}
>
  { children }
</Param>