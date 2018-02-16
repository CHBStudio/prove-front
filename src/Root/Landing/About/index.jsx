import Title from 'components/Title';
import Button from 'components/Button';
import PlayButton from 'components/PlayButton';

import BaseScreen from '../components/BaseScreen';

import styles from './styles.scss';


export default ({ pageRef, onEnter }) => {
  return <BaseScreen pageRef={pageRef} onEnter={onEnter}>
    <div className={styles.leftSide}>
      <Title tag="h1" className={styles.mainTitle}>Очень мотивирующий заголовок</Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dignissimos ea fugiat, hic inventore iste molestiae nemo porro qui rerum sed ullam? Accusamus eum excepturi facilis, laudantium vero voluptates.</p>
      <br/>
      <br/>
      <Button>Какое-то действие</Button>
    </div>
    <div className={styles.rightSide}>
      <PlayButton className={styles.playButton}/>
    </div>
  </BaseScreen>
}