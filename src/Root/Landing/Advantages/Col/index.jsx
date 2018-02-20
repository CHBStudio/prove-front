import Title from 'components/Title';

import styles from './styles.scss';


export default ({ icon='', title='', text='' }) => {
  return <div className={styles.root}>
    <div className={styles.icon} style={{ backgroundImage: `url(${icon})` }}/>
    <Title className={styles.title}>
      { title }
    </Title>
    <p className={cn(styles.text)}>
      { text }
    </p>
  </div>
}