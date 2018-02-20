import BaseRoundButton from 'components/BaseRoundButton';

import styles from './styles.scss';


export default ({ className='', onClick=()=>{}, isMuted }) => <BaseRoundButton
  className={cn(styles.root, isMuted && styles.rootMuted, className)}
  onClick={onClick}
/>