import Title from 'components/Title';

import BaseScreen from '../components/BaseScreen';

import styles from './styles.scss';


export default ({ pageRef, onEnter }) => {
  return <BaseScreen
    pageRef={pageRef}
    onEnter={onEnter}
    save={true}
  >
    <Title className={styles.title}>F.A.Q</Title>
    <div className={styles.container}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae delectus dignissimos officiis quaerat repellat ut. Accusamus beatae, consectetur, cum fugit, in ipsum maiores nulla quam ratione tenetur voluptatem voluptatibus.
    </div>
  </BaseScreen>
}