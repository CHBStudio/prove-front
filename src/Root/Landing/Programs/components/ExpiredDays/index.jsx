import moment from 'moment';

import pluralizer from 'utils/pluralizer';

import styles from './styles.scss';


moment.locale('ru');

export default ({ timestamp }) => {
  const currentDate = moment();
  const countDays = moment(timestamp * 1000).diff(currentDate, 'days');
  const text = Number(countDays) === 0 ?
    'Истекает сегодня' :
    `Истекает через ${ countDays } ${ pluralizer(countDays, 'день', 'дня', 'дней') }`;
  return <div className={styles.root}>
    { text }
  </div>
};