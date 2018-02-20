import api from 'config/api'
import RedButton from 'components/RedButton';

import styles from './styles.scss';


export default ({ courseId, isHidden=false }) => {
  return <div className={cn(styles.root, isHidden && styles.rootHidden)}>
    <a href={api.courseGoToPay(courseId)}>
      <RedButton className={styles.button}>Перейти к оплате</RedButton>
    </a>
  </div>
}