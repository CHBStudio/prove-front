import styles from './styles.scss';


export default (side) => ({ onClick=()=>{} }) => {
  return <div className={cn(
      styles.root,
      side === 'left' && styles.rootLeft,
      side === 'right' && styles.rootRight
    )}
    onClick={onClick}
  >
    <svg className={styles.icon} width="990px" height="1854px" viewBox="0 0 990 1854" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <polyline className={styles.iconBody} id="Line-4" strokeWidth="250" points="125.5 125.5 864.018821 927.16982 125.5 1728.83964"/>
      </g>
    </svg>
  </div>
}