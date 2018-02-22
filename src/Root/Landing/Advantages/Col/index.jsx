import Title from 'components/Title';

import styles from './styles.scss';


export default ({ title='', text='', className='' }) => {
  return <div className={styles.root}>
    <div className={cn(styles.icon, className)}/>
    <Title className={styles.title}>
      { title }
    </Title>
    <p className={cn(styles.text)}>
      { text }
    </p>
  </div>
}