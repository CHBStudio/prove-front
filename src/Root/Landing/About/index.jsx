import propTypes from 'prop-types';

import Title from 'components/Title';
import Button from 'components/Button';
import PhotoSide from 'components/PhotoSide';
import VideoContainer from 'components/VideoContainer';
import { SmallButton } from "components/SocialButton";
import MobileVideo from 'components/MobileVideo';

import BaseScreen from '../components/BaseScreen';
import coverUrl from './img/cover.jpg';
import videoUrl from './video/main.mov';

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
    if(!window.__IS_MOBILE__){
      window.addEventListener('resize', this.fit);
    }
  }

  componentDidMount(){
    if(!window.__IS_MOBILE__){
      this.fit();
    }
  }

  openVideo = () => this.setState({ showVideo: true });

  closeVideo = () => this.setState({ showVideo: false });

  render(){
    const { pageRef, onEnter, scrollToPrograms } = this.props;
    const { leftSideWidth, windowHeight, imageWidth, showVideo } = this.state;

    const leftSideStyles = window.__IS_MOBILE__ ? {} : { width: `${leftSideWidth - 1}px` };
    const rightSideStyles = window.__IS_MOBILE__ ? {} : { width: `${imageWidth}px`};

    return <BaseScreen
      pageRef={pageRef}
      onEnter={onEnter}
      className={styles.root}
      noListen={true}
      height={windowHeight}
    >
      <div className={styles.container} ref={ref => this.containerRef = ref}>
        <div className={cn(styles.leftSide, showVideo && styles.leftSideHidden)} style={leftSideStyles}>
          <Title tag="h1" className={styles.mainTitle}>Создай фигуру своей мечты</Title>
          <p className={styles.text}>
            Анастасия Крутых - твой персональный тренер, поможет тебе добиться идеального результата
          </p>
          <a href="https://www.instagram.com/nastya.krutyh/" target="_blank">
            <SmallButton type="inst" className={styles.socialBtn}/>
          </a>
          <a href="https://vk.com/nastena0807" target="_blank">
            <SmallButton type="vk" className={styles.socialBtn}/>
          </a>
          {/*<a href="http://fb.com" target="_blank">*/}
            {/*<SmallButton type="fb" className={styles.socialBtn}/>*/}
          {/*</a>*/}
          <br/>
          <Button onClick={scrollToPrograms} className={styles.mainBtn}>Выбрать программу</Button>
        </div>
        { !window.__IS_MOBILE__ && <div
          className={styles.rightSide}
          style={rightSideStyles}
          ref={ref => this.rightSideRef = ref}
        >
          <PhotoSide
            backgroundImage={coverUrl}
            className={styles.photo}
            side='right'
            onClick={this.openVideo}
            isHidden={showVideo}
          />
        </div> }
        { !window.__IS_MOBILE__ && <VideoContainer
          isHidden={!showVideo}
          src={videoUrl}
          onClose={this.closeVideo}
          className={styles.videoContainer}
        /> }
        { window.__IS_MOBILE__ && <MobileVideo
          backgroundImage={coverUrl}
          src={videoUrl}
        /> }
      </div>
    </BaseScreen>
  }

  componentWillUnmount(){
    if(!window.__IS_MOBILE__){
      window.removeEventListener('resize', this.fit);
    }
  }
}