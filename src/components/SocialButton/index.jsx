import RedButton from 'components/RedButton';
import { SmallRedButton } from 'components/SmallButtons';

import styles from './styles.scss';


export default ({ className, onClick, type }) => {
  return <RedButton
    className={cn(
      styles.root,
      type === 'vk' && styles.rootVk,
      type === 'fb' && styles.rootFb,
      type === 'inst' && styles.rootInst,
      className
    )}
    onClick={onClick}
  />
};

export const SmallButton = ({ className, onClick, type }) => {
  return <SmallRedButton
    className={cn(
      styles.rootSmall,
      type === 'vk' && styles.rootVk,
      type === 'fb' && styles.rootFb,
      type === 'inst' && styles.rootInst,
      className
    )}
    onClick={onClick}
  />
};