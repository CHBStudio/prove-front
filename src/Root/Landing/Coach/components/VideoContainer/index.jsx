import CloseButton from 'components/CloseButton';

import styles from './styles.scss';


export default ({ isHidden, src, onClose }) => <div className={cn(styles.root, isHidden && styles.rootHidden)}>
  <CloseButton
    className={styles.closeBnt}
    onClick={onClose}
  />
  <video className={styles.video} src={src}/>
</div>;