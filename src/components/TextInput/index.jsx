import styles from './styles.scss';


export default ({ onChange=()=>{}, val, errorMessage=null, placeholder, title='Почта', type='text' }) => {
  return <div className={styles.root}>
    <span className={styles.title}>{ title }</span>
    <input
      type={type}
      value={val}
      onChange={onChange}
      className={styles.input}
      placeholder={placeholder}
    />
    { errorMessage && <span className={styles.errorMessage}>{ errorMessage }</span> }
  </div>
}