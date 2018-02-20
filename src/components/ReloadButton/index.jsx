import styles from './styles.scss';


export default ({ className='', onClick=()=>{} }) => <div
  className={cn(styles.root, className)}
  onClick={onClick}
/>