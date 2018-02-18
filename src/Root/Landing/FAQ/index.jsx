import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import Question from './Question';

import styles from './styles.scss';


export default ({ pageRef, onEnter }) => {
  return <BaseScreen
    pageRef={pageRef}
    onEnter={onEnter}
    save={true}
  >
    <Title tag="h2" className={styles.title}>F.A.Q</Title>
    <div className={styles.container}>
      <Question title="Можно ли изменять выбранный план питания в течение месяца?"/>
      <Question title="Есть ли в программе меню для вегетарианцев?"/>
      <Question title="Можно ли тренироваться, если есть ограничения по здоровью? "/>
      <Question title="Могу ли я употреблять продукты, которых нет в рационе питания?"/>
    </div>
  </BaseScreen>
}