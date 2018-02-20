import BaseRoundButton from 'components/BaseRoundButton';

import styles from './styles.scss';


export default ({ className='', onClick=()=>{} }) => <BaseRoundButton
  className={cn(styles.root, className)}
  onClick={onClick}
/>