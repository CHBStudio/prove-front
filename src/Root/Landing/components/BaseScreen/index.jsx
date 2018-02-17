import Waypoint from 'react-waypoint';

import FullScreenContainer from 'components/FullScreenContainer';

import styles from './styles.scss';


export default ({
  children,
  pageRef,
  className,
  onEnter=()=>{},
  save,
}) => {
  const wayPointStylesTop = save ? { top: `${window.innerHeight/2}px` } : {};
  const wayPointStylesBottom = save ? { bottom: `${window.innerHeight/2}px` } : {};

  return <FullScreenContainer
    pageRef={pageRef}
    className={cn(styles.root, className)}
    save={save}
  >
    <div
      className={cn(styles.waypoint, save && styles.waypointSave)}
      style={wayPointStylesTop}
    >
      <Waypoint
        onEnter={onEnter}
        fireOnRapidScroll={false}
        scrollableAncestor={window}
      />
    </div>
    { children }
    { save && <div
      className={cn(styles.waypoint, save && styles.waypointSave)}
      style={wayPointStylesBottom}
    >
      <Waypoint
        onEnter={onEnter}
        fireOnRapidScroll={false}
        scrollableAncestor={window}
      />
    </div> }
  </FullScreenContainer>
}