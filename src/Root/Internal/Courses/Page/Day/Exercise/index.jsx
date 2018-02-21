import VideoContainer from 'components/VideoContainer';

import styles from './styles.scss';


export default ({ data }) => {
  return <div className={styles.root}>
    { data.video && <VideoContainer
      isHidden={false}
      src={'/' + data.video}
      onClose={() => {}}
      className={styles.videoContainer}
      classNameVideo={styles.video}
      autoPlay={false}
      noClose={true}
      canFullScreen={true}
      loop={false}
    /> }
    { data.description && <p className={styles.text}>
      { data.description }
    </p>}
  </div>
}