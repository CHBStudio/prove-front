import styles from './styles.scss';


export default ({
  backgroundImage,
  children,
  className,
}) => <div
  className={cn(styles.root, className)}
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  { children }
</div>;