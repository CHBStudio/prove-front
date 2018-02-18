import VideoParam from './VideoParam';
import TimeParam from './TimeParam';

import styles from './styles.scss';


export default ({ videoParam, timeParam }) => {
  return <div className={styles.root}>
    <VideoParam>{videoParam}</VideoParam>
    <TimeParam>{timeParam}</TimeParam>
  </div>
}