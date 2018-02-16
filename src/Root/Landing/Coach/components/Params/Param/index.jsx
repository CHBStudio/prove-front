import styles from './styles.scss';


export default ({
  children,
  backgroundImage,
  className,
  iconClassName,
}) => <div
    className={cn(styles.root, className)}
>
  <div
    className={cn(styles.leftSide, iconClassName)}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  />
  <div className={cn(styles.rightSide, '_SELECTABLE')}>{ children }</div>
</div>