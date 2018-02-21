import styles from './styles.scss';


export default ({ className, onClick, children=null }) => {
  return <div className={cn(styles.root, className)} onClick={onClick}>{ children }</div>
}