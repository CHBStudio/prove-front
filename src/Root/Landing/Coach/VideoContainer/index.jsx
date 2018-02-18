import propTypes from 'prop-types';

import styles from './styles.scss';


export default class extends Component {

  static propTypes = {
    videos: propTypes.arrayOf(propTypes.shape({
      src: propTypes.string,
      type: propTypes.string,
    })),
    preload: propTypes.bool,
    loop: propTypes.bool,
    autoPlay: propTypes.bool,
  };

  static defaultProps = {
    videos: [],
    loop: false,
    autoPlay: false,
  };

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    const videoElement = document.getElementById(styles.videoId);

    if (videoElement) {
      videoElement.pause();
      videoElement.src = '';
      videoElement.load();
    }
  }

  render() {
    const videos = this.props.videos.map((video, index) =>
      <source key={index} src={video.src} type={video.type} />);

    const videoProps = {
      loop: this.props.loop,
      autoPlay: this.props.autoPlay,
      muted: true,
    };

    return <div className={styles.root}>
      <video
        id={styles.videoId}
        className={styles.video}
        {...videoProps}
      >
        { videos }
      </video>
    </div>
  }
}