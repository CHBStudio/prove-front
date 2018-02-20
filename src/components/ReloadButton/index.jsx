import BaseRoundButton from 'components/BaseRoundButton';

import styles from './reloadStyles.scss';


export default ({ className='', onClick=()=>{} }) =>
  <BaseRoundButton
    className={cn(styles.root, className)}
    onClick={onClick}
  />