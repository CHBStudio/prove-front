import propTypes from 'prop-types';
import CloseButton from 'components/CloseButton';
import ReloadButton from 'components/ReloadButton';
import SoundToggle from 'components/SoundToggle';
import PlayPauseToggle from 'components/PlayPauseToggle';

import styles from './styles.scss';


export default class extends Component{

  static propTypes = {
    isHidden: propTypes.bool.isRequired,
    src: propTypes.string.isRequired,
    onClose: propTypes.func.isRequired,
    classNameVideo: propTypes.string,
    className: propTypes.string,
  };

  static defaultProps = {
    classNameVideo: '',
    className: '',
  };

  constructor(props){
    super(props);

    this.videoRef = null;

    this.state = {
      isMuted: false,
      isPaused: true,
    }
  }

  componentDidMount(){
    this.isHiddenToPause(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.isHiddenToPause(nextProps);
  }

  isHiddenToPause = (props) => {
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

  render(){
    const { isHidden, src, classNameVideo, className, onClose } = this.props;
    const { isMuted, isPaused } = this.state;


    const videoAttrs = isMuted ? { muted: true } : {};

    return <div
      className={cn(
        styles.root,
        isHidden && styles.rootHidden,
        className
      )}
    >
      <div className={styles.controlPannel}>
        <CloseButton
          className={styles.controlBtn}
          onClick={onClose}
        />
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
      </div>
      <video
        ref={ref => this.videoRef = ref}
        className={cn(styles.video, classNameVideo)}
        src={src}
        autoPlay={true}
        loop={true}
        {...videoAttrs}
      />
    </div>;
  }
}