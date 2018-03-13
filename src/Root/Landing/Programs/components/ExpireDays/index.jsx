import pluralizer from 'utils/pluralizer';

import styles from './styles.scss';


export default ({ numDays=0 }) => {
  return <div className={styles.root}>
    Период действия { numDays } { pluralizer(numDays, 'день', 'дня', 'дней' ) }
  </div>
};