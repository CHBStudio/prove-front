import propTypes from 'prop-types';

import CloseButton from 'components/CloseButton';
import ReloadButton from 'components/ReloadButton';
import SoundToggle from 'components/SoundToggle';
import PlayPauseToggle from 'components/PlayPauseToggle';
import FullScreenButton from 'components/FullScreenButton';
import VideoRangeInput from 'components/VideoRangeInput';

import styles from './styles.scss';


export default class extends Component{

  static propTypes = {
    isHidden: propTypes.bool.isRequired,
    src: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired,
    classNameVideo: propTypes.string,
    className: propTypes.string,
    autoPlay: propTypes.bool,
    noClose: propTypes.bool,
    canFullScreen: propTypes.bool,
    loop: propTypes.bool,
  };

  static defaultProps = {
    classNameVideo: '',
    className: '',
    autoPlay: true,
    noClose: false,
    canFullScreen: false,
    loop: true,
  };

  constructor(props){
    super(props);

    this.videoRef = null;
    this.rootRef = null;

    this.state = {
      isMuted: false,
      isPaused: true,

      isFullscreen: false,

      progress: 0,
      duration: 0,
    }
  }

  loadedmetadataListener = () => {
    this.setState({ duration: this.videoRef.duration });
  };

  timeupdateListener = () => {
    const progress = (this.videoRef.currentTime / this.videoRef.duration) * 100;
    this.setState({ progress });
  };

  endedListener = () => {
    this.setState({ isPaused: true });
  };

  componentDidMount(){
    this.isHiddenToPause(this.props);
    document.addEventListener('webkitfullscreenchange', this.fullScreenListener, false);
    document.addEventListener('mozfullscreenchange', this.fullScreenListener, false);
    document.addEventListener('fullscreenchange', this.fullScreenListener, false);
    document.addEventListener('MSFullscreenChange', this.fullScreenListener, false);

    this.videoRef.addEventListener('loadedmetadata', this.loadedmetadataListener);
    this.videoRef.addEventListener('timeupdate', this.timeupdateListener);
    this.videoRef.addEventListener('ended', this.endedListener);
  }

  componentWillReceiveProps(nextProps) {
    this.isHiddenToPause(nextProps);
  }

  fullScreenListener = () => {
    const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    this.setState({ isFullscreen: Boolean(fullscreenElement) });
  };

  isHiddenToPause = (props) => {
    if(!this.props.autoPlay){
      return;
    }
    if(props.isHidden){
      this.videoPause();
    }else{
      this.videoPlay();
    }
  };

  videoPause = () => {
    if(!this.videoRef){
      return;
    }

    this.videoRef.pause();
    this.setState({ isPaused: true });
  };

  videoPlay = () => {
    if(!this.videoRef){
      return;
    }

    this.videoRef.play();
    this.setState({ isPaused: false });
  };

  videoReplay = () => {
    if(!this.videoRef){
      return;
    }

    this.videoRef.currentTime = 0;
    this.videoPlay();
  };

  toggleSound = () => {
    this.setState({ isMuted: !this.state.isMuted });
  };

  togglePlayPause = () => {
    if(this.state.isPaused){
      this.videoPlay();
    }else{
      this.videoPause();
    }
  };

  toggleFullScreen = () => {
    const root = this.rootRef;

    if (!this.state.isFullscreen) {
      if (root.requestFullscreen) {
        root.requestFullscreen();
      } else if (root.mozRequestFullScreen) {
        root.mozRequestFullScreen();
      } else if (root.webkitRequestFullscreen) {
        root.webkitRequestFullscreen();
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };

  onChangeProgress = (progress) => {
    this.videoRef.currentTime = this.videoRef.duration * progress / 100;
  };

  render(){
    const {
      isHidden,
      src,
      classNameVideo,
      className,
      onClose,
      noClose,
      canFullScreen,
      loop,
    } = this.props;

    const { isMuted, isPaused, isFullscreen, progress, duration } = this.state;

    const videoAttrs = isMuted ? { muted: true } : {};

    return <div
      className={cn(
        styles.root,
        isHidden && styles.rootHidden,
        isFullscreen && styles.rootFullscreen,
        className
      )}
      ref={ref => this.rootRef = ref}
    >
      <video
        ref={ref => this.videoRef = ref}
        className={cn(styles.video, classNameVideo)}
        src={src}
        loop={loop}
        {...videoAttrs}
      />
      <div className={cn(styles.controlPannel, isFullscreen && styles.controlPanneFullScreen)}>
        { !noClose && <CloseButton
          className={styles.controlBtn}
          onClick={onClose}
        /> }
        <ReloadButton
          className={styles.controlBtn}
          onClick={this.videoReplay}
        />
        <SoundToggle
          className={styles.controlBtn}
          onClick={this.toggleSound}
          isMuted={isMuted}
        />
        <PlayPauseToggle
          className={styles.controlBtn}
          onClick={this.togglePlayPause}
          isPaused={isPaused}
        />
        { canFullScreen && <FullScreenButton
          className={styles.controlBtn}
          onClick={this.toggleFullScreen}
        /> }
      </div>
      { canFullScreen && <VideoRangeInput
        onChange={this.onChangeProgress}
        value={progress}
        duration={duration || 0}
        isFullscreen={isFullscreen}
      /> }
    </div>;
  }

  componentWillUnmount(){
    document.removeEventListener('webkitfullscreenchange', this.fullScreenListener, false);
    document.removeEventListener('mozfullscreenchange', this.fullScreenListener, false);
    document.removeEventListener('fullscreenchange', this.fullScreenListener, false);
    document.removeEventListener('MSFullscreenChange', this.fullScreenListener, false);

    this.videoRef.removeEventListener('loadedmetadata', this.loadedmetadataListener);
    this.videoRef.removeEventListener('timeupdate', this.timeupdateListener);
    this.videoRef.removeEventListener('ended', this.endedListener);
  }
}