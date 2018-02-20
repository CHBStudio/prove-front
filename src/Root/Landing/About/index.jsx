import propTypes from 'prop-types';

import Title from 'components/Title';
import Button from 'components/Button';
import PlayButton from 'components/PlayButton';

import BaseScreen from '../components/BaseScreen';

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

  render(){
    const { pageRef, onEnter, scrollToPrograms } = this.props;
    const { leftSideWidth, windowHeight, imageHeight, imageWidth } = this.state;

    return <BaseScreen pageRef={pageRef} onEnter={onEnter} className={styles.root} noListen={true} height={windowHeight}>
      <div className={styles.container} ref={ref => this.containerRef = ref}>
        <div className={styles.leftSide} style={{ width: `${leftSideWidth}px` }}>
          <Title tag="h1" className={styles.mainTitle}>Очень мотивирующий заголовок</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dignissimos ea fugiat, hic inventore iste molestiae nemo porro qui rerum sed ullam? Accusamus eum excepturi facilis, laudantium vero voluptates.</p>
          <br/>
          <br/>
          <Button onClick={scrollToPrograms}>Заниматься прямо сейчас</Button>
        </div>
        <div
          className={styles.rightSide}
          style={{ width: `${imageWidth}px`}}
          ref={ref => this.rightSideRef = ref}
        >
          <PlayButton className={styles.playButton}/>
          <div className={styles.coverWrapper}>
            <div className={styles.cover}/>
          </div>
        </div>
      </div>
    </BaseScreen>
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.fit);
  }
}