import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import Program1 from './Program1';
import Program2 from './Program2';
import Program3 from './Program3';

import styles from './styles.scss';


export default ({ pageRef, onEnter }) => {
  return <BaseScreen
    pageRef={pageRef}
    onEnter={onEnter}
    save={true}
  >
    <Title className={styles.mainTitle} tag="h2">Программы</Title>
    <Program1/>
    <Program2/>
    <Program3/>
  </BaseScreen>
}