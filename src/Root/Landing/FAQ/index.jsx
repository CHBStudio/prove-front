import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';
import Question from './Question';

import styles from './styles.scss';


export default ({ pageRef, onEnter, questions }) => {
  return <BaseScreen
    pageRef={pageRef}
    onEnter={onEnter}
    save={true}
  >
    <Title tag="h2" className={styles.title}>F.A.Q</Title>
    <div className={styles.container}>
      { questions.map((question, index) => <Question
        key={index}
        title={question.question}
        text={question.answer}
      />) }
    </div>
  </BaseScreen>
}