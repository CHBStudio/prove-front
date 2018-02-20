import CloseButton from 'components/CloseButton';

import styles from './styles.scss';


export default ({ isHidden, src, onClose, classNameVideo, className}) => <div
  className={cn(
    styles.root,
    isHidden && styles.rootHidden,
    className
  )}
>
  <CloseButton
    className={styles.closeBnt}
    onClick={onClose}
  />
  <video className={cn(styles.video, classNameVideo)} src={src} autoPlay={isHidden} loop={true} muted={isHidden}/>
</div>;