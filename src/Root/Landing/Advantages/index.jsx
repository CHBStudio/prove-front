import Title from 'components/Title';

import Col from './Col';
import BaseScreen from '../components/BaseScreen';

import coverUrl from './img/cover.jpg';

import styles from './styles.scss';


export default ({ pageRef, onEnter }) => {
  return <BaseScreen pageRef={pageRef} onEnter={onEnter} save={true} className={styles.root}>
    <Title tag="h2" className={styles.title}>
      Преимущества
    </Title>
    <img src={coverUrl} className={styles.cover}/>
    <div className={styles.container}>
      <Col
        className={styles.icon1}
        title="Уникальная программа"
        text="Доступ к которой остается у вас навсегда!"
      />
      <Col
        className={styles.icon2}
        title="Удобный формат"
        text="На каждое упражнение снято отдельное видео с подробнейшим письменным разбором техники и мышц, которые должны работать"
      />
      <Col
        className={styles.icon3}
        title="Эффективно"
        text="Подходит, как для новичков, так и для профессионалов (мы заставим вас попотеть)"
      />
      <Col
        className={styles.icon4}
        title="Универсально"
        text="Заниматься можно дома, в зале, на природе! ( в примечании расписаны все варианты замены инвентаря)"
      />
      <Col
        className={styles.icon5}
        title="Вкусно кушаем и худеем"
        text="Подробная лекция о питании, мы научим вас получать удовольствие без ограничений и самостоятельно рассчитывать норму кбжу"
      />
    </div>
  </BaseScreen>
}