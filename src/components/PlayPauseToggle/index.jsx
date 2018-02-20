import styles from './styles.scss';


export default ({ className='', onClick=()=>{}, isPaused }) => <div
  className={cn(styles.root, isPaused && styles.rootPaused, className)}
  onClick={onClick}
/>