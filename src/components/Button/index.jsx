import styles from './styles.scss';


export default ({ onClick=()=>{}, children, className='' }) => {
  return <button
    className={cn(styles.root, className)}
    onClick={onClick}
  >
    { children }
  </button>
}