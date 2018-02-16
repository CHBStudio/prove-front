import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import Program1 from './Program1';

import styles from './styles.scss';


export default ({ pageRef, onEnter }) => {
  return <BaseScreen pageRef={pageRef} onEnter={onEnter}>
    <Title className={styles.mainTitle} tag="h2">Программы</Title>
    <Program1/>
  </BaseScreen>
}