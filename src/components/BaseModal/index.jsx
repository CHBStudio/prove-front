import CloseButton from 'components/CloseButton';

import styles from './styles.scss';


export default ({ children, onClose=()=>{}, isHidden=false }) => {
  return <div className={cn(styles.root, isHidden && styles.rootHidden)}>
    <div className={styles.container}>
      <div className={styles.clickZone} onClick={onClose}/>
      <div className={styles.body}>
        { window.__IS_MOBILE__ && <CloseButton className={styles.closeBtn} onClick={onClose}/> }
        { children }
      </div>
    </div>
  </div>
}