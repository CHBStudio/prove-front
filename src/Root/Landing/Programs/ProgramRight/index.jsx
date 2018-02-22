import propTypes from 'prop-types';

import Title from 'components/Title';
import pluralizer from 'utils/pluralizer';
import PhotoSide from 'components/PhotoSide';
import VideoContainer from 'components/VideoContainer';
import MobileVideo from 'components/MobileVideo';

import GoToProgram from '../components/GotToProgram';
import ProgramSection from '../components/ProgramSection';
import DescriptionSide from '../components/DescriptionSide';
import Params from '../components/Params';
import List from '../components/List';
import Price from '../components/Price';

import styles from './styles.scss';



export default class extends Component{

  static propTypes = {
    isLoggedIn: propTypes.bool,
    data: propTypes.object.isRequired,
    userHasThisProgram: propTypes.bool.isRequired,
    className: propTypes.string,
    classNamePhotoSide: propTypes.string,
    classNameDescriptionSide: propTypes.string,
  };

  static defaultProps = {
    className: '',
    classNamePhotoSide: '',
    classNameDescriptionSide: '',
  };

  constructor(props){
    super(props);

    this.state = {
      showVideo: false,
    }
  }

  openVideo = () => this.setState({ showVideo: true });

  closeVideo = () => this.setState({ showVideo: false });

  render(){
    const { showVideo } = this.state;

    const { data, userHasThisProgram, isLoggedIn, className, classNamePhotoSide, classNameDescriptionSide } = this.props;

    return <ProgramSection className={className}>
      <DescriptionSide
        className={cn(styles.descriptionSide, classNameDescriptionSide)}
        isHidden={showVideo}
      >
        <Title tag="h3">
          { data.title }
        </Title>
        <Params
          videoParam={`${data.video_count} видео-${pluralizer(data.video_count, 'урок', 'урока', 'уроков')}`}
          timeParam={`${data.hour_count} ${pluralizer(data.hour_count, 'час', 'часа', 'часов')} занятий`}
        />
        <p className={styles.text}>
          { data.description }
        </p>
        <List items={data.advanteges}/>
        { userHasThisProgram ?
          <GoToProgram courseId={data.id}/>
          :
          <Price
            courseId={data.id}
            cost={`${data.cost} ₽`}
            isLoggedIn={isLoggedIn}
          />
        }
      </DescriptionSide>
      { window.__IS_MOBILE__ && <MobileVideo
        backgroundImage={'/' + data.photo}
        src={'/' + data.video}
      /> }
      { !window.__IS_MOBILE__ && <PhotoSide
        backgroundImage={'/' + data.photo}
        side="right"
        onClick={this.openVideo}
        isHidden={showVideo}
        className={classNamePhotoSide}
      /> }
      { !window.__IS_MOBILE__ && <VideoContainer
        isHidden={!showVideo}
        src={'/' + data.video}
        onClose={this.closeVideo}
      /> }
    </ProgramSection>
  }
}