import BaseRoundButton from 'components/BaseRoundButton';

import styles from './styles.scss';


export default ({ className='', onClick=()=>{}, isPaused }) => <BaseRoundButton
  className={cn(styles.root, isPaused && styles.rootPaused, className)}
  onClick={onClick}
/>