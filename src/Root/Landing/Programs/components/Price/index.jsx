import RedButton from 'components/RedButton';
import styles from './styles.scss';


export default ({ cost }) => <div
  className={styles.root}
>
  <div className={styles.cost}>{ cost }</div>
  <RedButton className={styles.button}>Начать тренировки</RedButton>
</div>