import Button from 'components/Button';

import styles from './styles.scss';


export default ({ children, onClick, className }) => {
  return <Button
    onClick={onClick}
    className={cn(styles.root, className)}
  >
    { children }
  </Button>
}