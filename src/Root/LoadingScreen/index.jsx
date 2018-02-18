import Spinner from 'components/Spinner';

import styles from './styles.scss';


export default ({ isHidden=false }) => {
  return <div className={cn(styles.root, isHidden && styles.rootHidden)}>
    <Spinner className={styles.spinner}/>
  </div>
}