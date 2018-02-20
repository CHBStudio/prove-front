import PlayButton from 'components/PlayButton';

import styles from './styles.scss';


export default ({
  backgroundImage,
  children,
  className,
  onClick=()=>{},
  side='left',
  isHidden,
}) => <div
  className={cn(
    styles.root,
    isHidden && styles.rootHidden,
    className,
    side === 'left' && styles.rootLeft,
    side === 'right' && styles.rootRight,
  )}
  onClick={onClick}
>
  <div className={styles.photoWrapper}>
    <div
      className={styles.photo}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  </div>
  <PlayButton
    className={cn(
      styles.playButton,
      side === 'left' && styles.playButtonLeft,
      side === 'right' && styles.playButtonRight
    )}
    bodyClassName={styles.playButtonBody}
  />
</div>;