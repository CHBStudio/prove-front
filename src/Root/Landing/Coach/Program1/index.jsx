import Title from 'components/Title';
import PlayButton from 'components/PlayButton';

import ProgramSection from '../components/ProgramSection';
import PhotoSide from '../components/PhotoSide';
import DescriptionSide from '../components/DescriptionSide';
import Params from '../components/Params';
import List from '../components/List';
import Price from '../components/Price';

import coverImg from './img/cover.jpg';
import styles from './styles.scss';



export default class extends Component{
  constructor(props){
    super(props);

    this.state = {
      readyToPlay: false,
    }
  }

  playHover = () => this.setState({ readyToPlay: true });

  playOver = () => this.setState({ readyToPlay: false });

  render(){
    const { readyToPlay } = this.state;

    return <ProgramSection>
      <PhotoSide
        backgroundImage={coverImg}
        side="left"
        className={cn(styles.photoSide, readyToPlay && styles.photoSideWide)}
      >
        <PlayButton
          className={styles.playButton}
          onHover={this.playHover}
          onOver={this.playOver}
        />
      </PhotoSide>
      <DescriptionSide className={cn(styles.descriptionSide, readyToPlay && styles.descriptionSideShifted)}>
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
    </ProgramSection>
  }
}