import styles from './styles.scss';


export default ({ tag='h5', children, className, titleRef }) => {
  const Tag = tag;
  return <Tag className={cn(styles.root, className, '_SELECTABLE')} ref={titleRef}>{ children }</Tag>
}