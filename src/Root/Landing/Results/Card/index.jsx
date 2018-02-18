import Title from 'components/Title';

import styles from './styles.scss';


export default ({ name, age, desc, imageUrl }) => {
  return <div className={styles.root}>
    <img className={styles.image} src={imageUrl}/>
    <div className={styles.info}>
      <Title tag="h5" className={styles.title}>
        { name }, { age }
      </Title>
      <p className={styles.text}>
        { desc }
      </p>
    </div>
  </div>
}