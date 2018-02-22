import Title from 'components/Title';
import VideoContainer from 'components/VideoContainer';
import MobileVideo from 'components/MobileVideo';

import styles from './styles.scss';


export default ({ data }) => {
  return <div className={styles.root}>
    { data.title && <Title className={styles.title}>{ data.title }</Title> }
    { data.video && !window.__IS_MOBILE__ && <VideoContainer
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
    { data.video && window.__IS_MOBILE__ && <MobileVideo
      src={'/' + data.video}
      className={styles.mobileVideo}
      classNameImg={styles.mobileVideoPreview}
      loop={false}
    /> }
    { data.description && <p className={styles.text}>
      { data.description }
    </p>}
  </div>
}