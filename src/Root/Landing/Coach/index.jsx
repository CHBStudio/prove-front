import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import VideoContainer from './VideoContainer';

import coachVideoUrl from './video/coach.mp4';
import styles from './styles.scss';


export default ({ pageRef, onEnter }) => {
  return <BaseScreen
    pageRef={pageRef}
    onEnter={onEnter}
    className={styles.root}
    save={true}
  >
    <Title tag="h2" className={styles.title}>О тренере</Title>
    <div className={styles.container}>
      <VideoContainer
        videos={[
          { src: coachVideoUrl, type: 'video/mp4' },
        ]}
        autoPlay={true}
        loop={true}
      />
      <div className={styles.overlay}/>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa eaque id labore molestiae neque quae quisquam repellat reprehenderit tempora? Dignissimos enim eveniet explicabo fugiat inventore labore quos recusandae tempore!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa eaque id labore molestiae neque quae quisquam repellat reprehenderit tempora? Dignissimos enim eveniet explicabo fugiat inventore labore quos recusandae tempore!
        </p>
      </div>
    </div>
  </BaseScreen>
}