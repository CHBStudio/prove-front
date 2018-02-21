import propTypes from 'prop-types';

import Title from 'components/Title';
import Button from 'components/Button';
import PhotoSide from 'components/PhotoSide';
import VideoContainer from 'components/VideoContainer';
import { SmallButton } from "components/SocialButton";

import BaseScreen from '../components/BaseScreen';
import coverUrl from './img/cover.jpg';
import videoUrl from './video/small.mp4';

import styles from './styles.scss';


export default class extends Component {

  static propTypes = {
    pageRef: propTypes.func.isRequired,
    onEnter: propTypes.func.isRequired,
    scrollToPrograms: propTypes.func.isRequired,
  };

  constructor(props){
    super(props);

    this.containerRef = null;
    this.rightSideRef = null;

    this.state = {
      leftSideWidth: 0,
      windowHeight: window.innerHeight,
      imageWidth: 0,

      showVideo: false,
    }
  }

  fit = () => {
    if(!this.containerRef || !this.rightSideRef){
      return;
    }
    const windowHeight = window.innerHeight;
    const containerWidth = this.containerRef.offsetWidth;

    const imageHeight = this.rightSideRef.offsetHeight;
    const imageWidth = imageHeight / 1.5;

    const leftSideWidth = containerWidth - imageWidth;

    this.setState({ leftSideWidth, windowHeight, imageWidth });
  };

  componentWillMount(){
    window.addEventListener('resize', this.fit);
  }

  componentDidMount(){
    this.fit();
  }

  openVideo = () => this.setState({ showVideo: true });

  closeVideo = () => this.setState({ showVideo: false });

  render(){
    const { pageRef, onEnter, scrollToPrograms } = this.props;
    const { leftSideWidth, windowHeight, imageWidth, showVideo } = this.state;

    return <BaseScreen pageRef={pageRef} onEnter={onEnter} className={styles.root} noListen={true} height={windowHeight}>
      <div className={styles.container} ref={ref => this.containerRef = ref}>
        <div className={cn(styles.leftSide, showVideo && styles.leftSideHidden)} style={{ width: `${leftSideWidth}px` }}>
          <Title tag="h1" className={styles.mainTitle}>Очень мотивирующий заголовок</Title>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dignissimos ea fugiat, hic inventore iste molestiae nemo porro qui rerum sed ullam? Accusamus eum excepturi facilis, laudantium vero voluptates.</p>

          <a href="http://instagram.com" target="_blank">
            <SmallButton type="inst" className={styles.socialBtn}/>
          </a>
          <a href="http://vk.com" target="_blank">
            <SmallButton type="vk" className={styles.socialBtn}/>
          </a>
          <a href="http://fb.com" target="_blank">
            <SmallButton type="fb" className={styles.socialBtn}/>
          </a>
          <br/>
          <Button onClick={scrollToPrograms} className={styles.mainBtn}>Выбрать программу</Button>
        </div>
        <div
          className={styles.rightSide}
          style={{ width: `${imageWidth}px`}}
          ref={ref => this.rightSideRef = ref}
        >
          <PhotoSide
            backgroundImage={coverUrl}
            className={styles.photo}
            side='right'
            onClick={this.openVideo}
            isHidden={showVideo}
          />
        </div>
        <VideoContainer
          isHidden={!showVideo}
          src={videoUrl}
          onClose={this.closeVideo}
          className={styles.videoContainer}
        />
      </div>
    </BaseScreen>
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.fit);
  }
}