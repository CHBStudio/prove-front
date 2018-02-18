import Title from 'components/Title';

import ProgramSection from '../components/ProgramSection';
import PhotoSide from '../components/PhotoSide';
import DescriptionSide from '../components/DescriptionSide';
import Params from '../components/Params';
import List from '../components/List';
import Price from '../components/Price';
import VideoContainer from '../components/VideoContainer';

import coverImg from './img/cover.jpg';
import videoUrl from './video/small.mp4';
import styles from './styles.scss';



export default class extends Component{
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

    return <ProgramSection>
      <PhotoSide
        backgroundImage={coverImg}
        side="left"
        onClick={this.openVideo}
        isHidden={showVideo}
      />
      <DescriptionSide
        className={styles.descriptionSide}
        isHidden={showVideo}
      >
        <Title tag="h3">
          Самостоятельные тренировки с лентами
        </Title>
        <Params videoParam="6 видео-уроков" timeParam="12 часов занятий"/>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, iure, ut! Adipisci aut consequatur, consequuntur error esse explicabo impedit quaerat tempora. Aliquam distinctio expedita facilis illum perspiciatis possimus quibusdam sit?
        </p>
        <List items={[
          'Накачанные ягодицы',
          'Волевое лицо',
          'Два часа потраченного времени в день',
          'Удовольствие',
        ]}/>
        <Price cost="7900 ₽"/>
      </DescriptionSide>
      <VideoContainer
        isHidden={!showVideo}
        src={videoUrl}
        onClose={this.closeVideo}
      />
    </ProgramSection>
  }
}