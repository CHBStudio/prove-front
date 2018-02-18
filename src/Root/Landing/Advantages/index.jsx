import Title from 'components/Title';

import Col from './Col';
import BaseScreen from '../components/BaseScreen';

import coverUrl from './img/cover.jpg';
import styles from './styles.scss';


export default ({ pageRef, onEnter }) => {
  return <BaseScreen pageRef={pageRef} onEnter={onEnter} save={true}>
    <Title tag="h2" className={styles.title}>
      Преимущества
    </Title>
    <img src={coverUrl} className={styles.cover}/>
    <div className={styles.container}>
      <Col
        icon='#'
        title="Преимущества"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi assumenda dolor explicabo nulla repellendus! "
      />
      <Col
        icon='#'
        title="Преимущества"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi assumenda dolor explicabo nulla repellendus! "
      />
      <Col
        icon='#'
        title="Преимущества"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi assumenda dolor explicabo nulla repellendus! "
      />
    </div>
  </BaseScreen>
}