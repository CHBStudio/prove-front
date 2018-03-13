import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import VideoContainer from './VideoContainer';

import coachVideoUrl from './video/coach.mov';
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
      { !window.__IS_MOBILE__ && <VideoContainer
        videos={[
          { src: coachVideoUrl, type: 'video/mp4' },
        ]}
        autoPlay={true}
        loop={true}
      /> }
      <div className={styles.overlay}/>
      <div className={styles.content}>
        <p className={styles.text}>
          <Title className={styles.coachTitle}>Анастасия Крутых</Title>
          Профессиональный тренер по фитнесу и бодибилдингу
          <br/>
          <br/>
          Дипломированный диетолог
          <br/>
          <br/>
          Создательница проекта по преображению для девушек.
          <br/>
          <br/>
          За год существования проекта 400 девушек уже добились серьезных результатов
          <br/>
          <br/>
          Автор профессионального видеокурса тренировок для дома
          <br/>
          <br/>
          Хореограф и чемпионка России по танцам
          <br/>
          <br/>
          Автор линейки спортивной одежды
          <br/>
          <br/>
          Блоггер
        </p>
      </div>
    </div>
  </BaseScreen>
}