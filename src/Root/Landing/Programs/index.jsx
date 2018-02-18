import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import ProgramLeft from './ProgramLeft';
import ProgramRight from './ProgramRight';

import styles from './styles.scss';


export default ({ pageRef, onEnter, programs, user }) => {
  return <BaseScreen
    pageRef={pageRef}
    onEnter={onEnter}
    save={true}
  >
    <Title className={styles.mainTitle} tag="h2">Программы</Title>
    { programs.map((program, index) => {
      const userHasThisProgram = user.isLoggedIn && user.data.courses.indexOf(program.id) >= 0;
      return index % 2 === 0 ?
      <ProgramLeft key={index} data={program} userHasThisProgram={userHasThisProgram}/> :
      <ProgramRight key={index} data={program} userHasThisProgram={userHasThisProgram}/>
    })}
  </BaseScreen>
}