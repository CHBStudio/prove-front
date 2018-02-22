import styles from './styles.scss';


export default ({ children, className, isHidden }) => <div
  className={cn(styles.root, isHidden && styles.rootHidden, className)}
>
  <div className={styles.wrapperFlex}>
    <div className={styles.wrapper}>
      { children }
    </div>
  </div>
</div>