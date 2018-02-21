import BaseRoundButton from 'components/BaseRoundButton';

import styles from './styles.scss';


export default ({ activeIndex=0, onChangeIndex=()=>{} }) => {
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вc'];

  return <div className={styles.root}>
    { days.map((dayName, index) => {
      return <BaseRoundButton
        key={index}
        onClick={() => onChangeIndex(index)}
        className={cn(styles.button, activeIndex === index && styles.buttonActive)}
      >
        { dayName }
      </BaseRoundButton>
    }) }
  </div>;
}