import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import ProgramRight from './ProgramRight';
import ProgramLeft from './ProgramLeft';

import styles from './styles.scss';


export default ({ pageRef, onEnter, programs, user }) => {
  const { isLoggedIn } = user;
  return <BaseScreen
    pageRef={pageRef}
    onEnter={onEnter}
    save={true}
  >
    <Title className={styles.mainTitle} tag="h2">Программы</Title>
    { programs.map((program, index) => {
      const userHasThisProgram = isLoggedIn && user.data.courses.indexOf(program.id) >= 0;
      return index % 2 === 0 ?
      <ProgramLeft
        key={index}
        data={program}
        userHasThisProgram={userHasThisProgram}
        isLoggedIn={isLoggedIn}
      />
        :
      <ProgramRight
        key={index}
        data={program}
        userHasThisProgram={userHasThisProgram}
        isLoggedIn={isLoggedIn}
      />
    })}
  </BaseScreen>
}