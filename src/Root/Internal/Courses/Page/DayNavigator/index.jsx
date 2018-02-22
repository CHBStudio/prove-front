import BaseRoundButton from 'components/BaseRoundButton';
import { SmallRedButton } from 'components/SmallButtons';

import styles from './styles.scss';


export default ({ activeIndex=0, onChangeIndex=()=>{} }) => {
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вc'];

  const buttonIndexFood =  days.length;
  const buttonIndexExtra = days.length + 1;

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
    <SmallRedButton
      className={cn(styles.buttonExtra, activeIndex === buttonIndexFood && styles.buttonExtraActive)}
      onClick={() => onChangeIndex(buttonIndexFood)}
    >
      Питание
    </SmallRedButton>
    <SmallRedButton
      className={cn(styles.buttonExtra, activeIndex === buttonIndexExtra && styles.buttonExtraActive)}
      onClick={() => onChangeIndex(buttonIndexExtra)}
    >
      Дополнительно
    </SmallRedButton>
  </div>;
}