import Exercise from './Exercise';

import styles from './styles.scss';


export default ({ data }) => {
  return <div className={styles.root}>
    { data.exercises.map((exercise, index) => {
      return <Exercise data={exercise} key={index}/>
    }) }
  </div>
}