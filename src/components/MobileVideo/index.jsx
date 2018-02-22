import propTypes from 'prop-types';

import PlayButton from 'components/PlayButton';
import Spinner from 'components/Spinner';

import styles from './styles.scss';


export default class extends Component{

  static propTypes = {
    backgroundImage: propTypes.string.isRequired,
    src: propTypes.string.isRequired,
    loop: propTypes.bool,
    classNames: propTypes.string,
    classNameImg: propTypes.string,
  };

  static defaultProps = {
    loop: true,
    className: '',
    classNameImg: '',
  };

  constructor(props){
    super(props);

    this.videoRef = null;

    this.state = {
      isPlaying: false,
    }
  }

  componentDidMount(){
    document.addEventListener('webkitfullscreenchange', this.fullScreenListener, false);
    document.addEventListener('mozfullscreenchange', this.fullScreenListener, false);
    document.addEventListener('fullscreenchange', this.fullScreenListener, false);
    document.addEventListener('MSFullscreenChange', this.fullScreenListener, false);

    this.videoRef.addEventListener('play', this.playListener, false);
    this.videoRef.addEventListener('pause', this.pauseListener, false);
  }

  playListener = () => this.setState({ isPlaying: true });

  pauseListener = () => this.setState({ isPlaying: false });

  fullScreenListener = () => {
    const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    if(!fullscreenElement){
      this.videoRef.pause();
    }
  };

  onPlay = () => {
    this.videoRef.play();

    if (this.videoRef.requestFullscreen) {
      this.videoRef.requestFullscreen();
    } else if (this.videoRef.mozRequestFullScreen) {
      this.videoRef.mozRequestFullScreen();
    } else if (this.videoRef.webkitRequestFullscreen) {
      this.videoRef.webkitRequestFullscreen();
    }
  };

  render(){
    const { backgroundImage, src, loop, className, classNameImg } = this.props;
    const { isPlaying } = this.state;

    return <div className={cn(styles.root, className)}>
      <video
        ref={ref => this.videoRef = ref}
        className={styles.video}
        src={src}
        loop={loop}
      />
      <img src={backgroundImage} className={cn(styles.img, classNameImg)}/>
      <PlayButton className={cn(styles.playBtn, isPlaying && styles.playBtnHidden)} onClick={this.onPlay}/>
      <Spinner className={cn(styles.spinner, !isPlaying && styles.spinnerHidden)}/>
    </div>
  }

  componentWillUnmount(){
    document.removeEventListener('webkitfullscreenchange', this.fullScreenListener, false);
    document.removeEventListener('mozfullscreenchange', this.fullScreenListener, false);
    document.removeEventListener('fullscreenchange', this.fullScreenListener, false);
    document.removeEventListener('MSFullscreenChange', this.fullScreenListener, false);

    this.videoRef.removeEventListener('play', this.playListener, false);
    this.videoRef.removeEventListener('pause', this.pauseListener, false);
  }
}