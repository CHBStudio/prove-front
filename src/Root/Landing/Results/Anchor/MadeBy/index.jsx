import styles from './styles.scss';


export default () => {
  return <a className={styles.root} target="_blank" href="https://chb.studio">
    <span className={styles.title}>Разработано в</span>
    <span className={styles.logo}/>
  </a>
}