import Button from 'components/Button';
import styles from './styles.scss';


export default ({ cost }) => <div
  className={styles.root}
>
  <div className={styles.cost}>{ cost }</div>
  <Button className={styles.button}>Начать тренировки</Button>
</div>