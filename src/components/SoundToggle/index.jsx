import styles from './styles.scss';


export default ({ className='', onClick=()=>{}, isMuted }) => <div
  className={cn(styles.root, isMuted && styles.rootMuted, className)}
  onClick={onClick}
/>