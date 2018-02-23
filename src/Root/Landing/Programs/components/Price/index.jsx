import api from 'config/api';
import connect from 'utils/connect';
import { modals, user } from 'store';
import RedButton from 'components/RedButton';

import styles from './styles.scss';



const Price = ({ cost, courseId, isLoggedIn, actions, isActive }) => {

  const onClickButtonPay = () => {
    actions.user.userSetWannaCourse(courseId);
    actions.modals.openModal('registration');
  };

  const Button = isLoggedIn ?
    <a href={api.courseGoToPay(courseId)}>
      <RedButton className={styles.button}>Начать тренировки</RedButton>
    </a>
    :
    <RedButton
      onClick={onClickButtonPay}
      className={cn(styles.button)}
    >Начать тренировки</RedButton>;


  return <div
    className={styles.root}
  >
    <div className={styles.cost}>{ cost }</div>
    { window.__IS_MOBILE__ && <br/> }
    { isActive ? Button : <RedButton
        className={cn(styles.button, styles.buttonDisabled)}
      >
        Coming soon
      </RedButton>
    }
  </div>;
};

export default connect({ modals, user })(Price);