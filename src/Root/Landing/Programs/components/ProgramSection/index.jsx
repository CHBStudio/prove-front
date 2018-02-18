import styles from './styles.scss';


export default ({ children, className='' }) => <div
  className={cn(styles.root, className)}
>
  { children }
</div>