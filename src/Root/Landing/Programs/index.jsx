import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import ProgramLeft from './ProgramLeft';
import ProgramRight from './ProgramRight';
import Program2 from './Program2';
import Program3 from './Program3';

import styles from './styles.scss';


export default ({ pageRef, onEnter, programs }) => {
  return <BaseScreen
    pageRef={pageRef}
    onEnter={onEnter}
    save={true}
  >
    <Title className={styles.mainTitle} tag="h2">Программы</Title>
    { programs.map((program, index) => index % 2 === 0 ?
      <ProgramLeft key={index} data={program}/> :
      <ProgramRight key={index} data={program}/>
    )}
  </BaseScreen>
}