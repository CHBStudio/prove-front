import DefaultButton from 'components/Button';
import DefaultRedButton from 'components/RedButton';

import styles from './styles.scss';


export const SmallButton = ({ className, children, onClick }) => <DefaultButton
  onClick={onClick}
  className={cn(styles.root, className)}
>
  { children }
</DefaultButton>;


export const SmallRedButton = ({ className, children, onClick }) => <DefaultRedButton
  onClick={onClick}
  className={cn(styles.root, className)}
>
  { children }
</DefaultRedButton>;


