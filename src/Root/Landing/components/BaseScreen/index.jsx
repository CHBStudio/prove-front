import FullScreenContainer from 'components/FullScreenContainer';

import styles from './styles.scss';


export default ({ children, pageRef, className }) => <FullScreenContainer
  pageRef={pageRef}
  className={cn(styles.root, className)}
>
  { children }
</FullScreenContainer>