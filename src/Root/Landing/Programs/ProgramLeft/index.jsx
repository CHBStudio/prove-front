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
import ExpireDays from '../components/ExpireDays';
import ExpiredDays from '../components/ExpiredDays';


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
      { !window.__IS_MOBILE__ && <PhotoSide
        backgroundImage={'/' + data.photo}
        side="left"
        onClick={this.openVideo}
        isHidden={showVideo}
        className={classNamePhotoSide}
      /> }
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

        <ExpireDays numDays={data.expire}/>

        { userHasThisProgram && <ExpiredDays timestamp={data.expired}/> }

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
            isActive={data.active}
            isLoggedIn={isLoggedIn}
            oldCost={data.old_cost && `${data.old_cost} ₽`}
          />
        }
      </DescriptionSide>
      { window.__IS_MOBILE__ && <MobileVideo
        backgroundImage={'/' + data.photo}
        src={'/' + data.video}
      /> }
      { !window.__IS_MOBILE__ && <VideoContainer
        isHidden={!showVideo}
        src={'/' + data.video}
        onClose={this.closeVideo}
      /> }
    </ProgramSection>
  }
}