import styles from './styles.scss';
import Param from '../Param';
import VideoIcon from './img/video.svg';


export default ({ children, className }) => <Param
  backgroundImage={VideoIcon}
  iconClassName={styles.icon}
  className={className}
>
  { children }
</Param>