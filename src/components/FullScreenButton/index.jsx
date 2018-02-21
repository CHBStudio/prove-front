import BaseRoundButton from 'components/BaseRoundButton';

import styles from './styles.scss';


export default ({ onClick=()=>{}, className='' }) => {
  return <BaseRoundButton onClick={onClick} className={cn(styles.root, className)} />
}