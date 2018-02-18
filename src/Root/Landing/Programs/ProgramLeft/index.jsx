import propTypes from 'prop-types';

import Title from 'components/Title';
import pluralizer from 'utils/pluralizer';
import Button from 'components/Button';

import GoToProgram from '../components/GotToProgram';
import ProgramSection from '../components/ProgramSection';
import PhotoSide from '../components/PhotoSide';
import DescriptionSide from '../components/DescriptionSide';
import Params from '../components/Params';
import List from '../components/List';
import Price from '../components/Price';
import VideoContainer from '../components/VideoContainer';


import styles from './styles.scss';



export default class extends Component{

  static propTypes = {
    data: propTypes.object.isRequired,
    userHasThisProgram: propTypes.bool.isRequired,
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

    const { data, userHasThisProgram } = this.props;

    return <ProgramSection>
      <PhotoSide
        backgroundImage={'/' + data.photo}
        side="left"
        onClick={this.openVideo}
        isHidden={showVideo}
      />
      <DescriptionSide
        className={styles.descriptionSide}
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
        { userHasThisProgram ? <GoToProgram/> : <Price cost={`${data.cost} ₽`}/>}
      </DescriptionSide>
      <VideoContainer
        isHidden={!showVideo}
        src={'/' + data.video}
        onClose={this.closeVideo}
      />
    </ProgramSection>
  }
}