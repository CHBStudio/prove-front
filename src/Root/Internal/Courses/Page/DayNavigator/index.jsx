import BaseRoundButton from 'components/BaseRoundButton';

import styles from './styles.scss';


export default ({ days, onChange=()=>{}, activeDay }) => {
  const daysNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вc'];

  return <div className={styles.root}>
    { days.map((day, index) => {
      return <BaseRoundButton
        key={index}
        onClick={() => onChange(day.day)}
        className={cn(
          styles.button,
          activeDay === day.day &&
          styles.buttonActive
        )}
      >
        { daysNames[day.day - 1] }
      </BaseRoundButton>;
    }) }
  </div>;
}