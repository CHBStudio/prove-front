import styles from './styles.scss';


export default ({ items=[] }) => {
  return <div className={styles.root}>
    { items.map((text, index) => <div
      className={styles.item}
      key={index}
    >
      <div className={styles.icon}/>
      <div className={cn(styles.text, '_SELECTABLE')}>{ text }</div>
    </div> )}
  </div>
}