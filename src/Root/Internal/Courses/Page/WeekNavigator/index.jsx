import BaseRoundButton from 'components/BaseRoundButton';

import styles from './styles.scss';


export default ({
  countWeeks=0,
  activeWeek=0,
  onChange=()=>{},
  showFood=()=>{},
  showExtra=()=>{},
  isFood,
  isExtra,
}) => {

  const renderedWeeks = [];

  for (let index = 0; index < countWeeks; index++){
    renderedWeeks.push(
      <BaseRoundButton
        key={index}
        onClick={() => onChange(index)}
        className={cn(
          styles.button,
          activeWeek === index && !isFood && !isExtra && styles.buttonActive
        )}
      >
        Неделя {index + 1}
      </BaseRoundButton>
    )
  }

  const extraContent = <div className={styles.extraContent}>
    <BaseRoundButton
      onClick={showFood}
      className={cn(
        styles.button,
        isFood && styles.buttonActive
      )}
    >
      Питание
    </BaseRoundButton>
    <BaseRoundButton
      onClick={showExtra}
      className={cn(
        styles.button,
        isExtra && styles.buttonActive
      )}
    >
      Дополнительно
    </BaseRoundButton>
  </div>;

  return <div className={styles.root}>
    { extraContent }
    { renderedWeeks }
  </div>
}