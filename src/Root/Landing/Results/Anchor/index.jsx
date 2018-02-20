import Title from 'components/Title';
import RedButton from 'components/RedButton';

import styles from './styles.scss';


export default ({ scrollToPrograms }) => <div className={styles.root}>
  <Title className={styles.title}>
    Понравились результаты? Выбери свою программу
  </Title>
  <RedButton
    onClick={scrollToPrograms}
    className={styles.button}
  >Выбрать программу</RedButton>
</div>