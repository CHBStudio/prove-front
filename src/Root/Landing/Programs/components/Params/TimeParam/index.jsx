import styles from './styles.scss';
import Param from '../Param';
import ClockIcon from './img/clock.svg';


export default ({ children, className }) => <Param
  backgroundImage={ClockIcon}
  iconClassName={styles.icon}
  className={className}
>
  { children }
</Param>