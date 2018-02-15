import Waypoint from 'react-waypoint';

import FullScreenContainer from 'components/FullScreenContainer';

import styles from './styles.scss';


export default ({ children, pageRef, className, onEnter=()=>{} }) => <FullScreenContainer
  pageRef={pageRef}
  className={cn(styles.root, className)}
>
  <div className={styles.waypoint}>
    <Waypoint
      onEnter={onEnter}
      fireOnRapidScroll={false}
      scrollableAncestor={window}
    />
  </div>
  { children }
</FullScreenContainer>