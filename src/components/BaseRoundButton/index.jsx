import styles from './styles.scss';


export default ({ className, onClick }) => {
  return <div className={cn(styles.root, className)} onClick={onClick}/>
}