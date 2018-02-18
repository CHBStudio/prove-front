import styles from './styles.scss';


export default ({ children, onClose=()=>{}, isHidden=false }) => {
  return <div className={cn(styles.root, isHidden && styles.rootHidden)}>
    <div className={styles.container}>
      <div className={styles.clickZone} onClick={onClose}/>
      <div className={styles.body}>
        { children }
      </div>
    </div>
  </div>
}