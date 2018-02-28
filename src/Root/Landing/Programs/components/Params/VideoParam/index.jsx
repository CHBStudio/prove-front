import styles from './styles.scss';
import Param from '../Param';
import videoUrl from './videoIcons/videoIcon.svg';


export default ({ children, className }) => <Param
  backgroundImage={videoUrl}
  iconClassName={styles.icon}
  className={className}
>
  { children }
</Param>