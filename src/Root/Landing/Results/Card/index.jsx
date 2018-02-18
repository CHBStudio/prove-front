import Title from 'components/Title';

import styles from './styles.scss';


export default ({ title, description, imageUrl }) => {
  return <div className={styles.root}>
    <img className={styles.image} src={imageUrl}/>
    <div className={styles.info}>
      <Title tag="h5" className={styles.title}>
        { title }
      </Title>
      <p className={styles.text}>
        { description }
      </p>
    </div>
  </div>
}