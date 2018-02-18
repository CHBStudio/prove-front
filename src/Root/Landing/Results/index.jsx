import Slider from 'react-slick';
import './slider.scss';

import Title from 'components/Title';
import BaseScreen from '../components/BaseScreen';

import image1 from './img/test1.jpg';
import image2 from './img/test2.jpg';
import image3 from './img/test3.jpg';

import Card from './Card';
import NavArrow from './NavArrow';

import styles from './styles.scss';


export default ({ pageRef, onEnter }) => {

  const LeftArrow = NavArrow('left');
  const RightArrow = NavArrow('right');

  const settings = {
    dots: false,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',
    autoplaySpeed: 2500,
    prevArrow: <RightArrow/>,
    nextArrow: <LeftArrow />,
    className: styles.slider,
  };

  return <BaseScreen
    pageRef={pageRef}
    onEnter={onEnter}
    className={styles.root}
  >
    <Title className={styles.title}>Результаты</Title>
    <Slider {...settings}>
        <div className={styles.slideWrapper}>
          <Card
            name="Ольга"
            age="25 лет"
            desc="Занималась по программе «Сделай или сдохни» и добилась невероятных жертв в рядах целюлита за 2 месяца"
            imageUrl={image1}
          />
        </div>
        <div className={styles.slideWrapper}>
          <Card
            name="Ольга"
            age="25 лет"
            desc="Занималась по программе «Сделай или сдохни» и добилась невероятных жертв в рядах целюлита за 2 месяца"
            imageUrl={image2}
          />
        </div>
        <div className={styles.slideWrapper}>
          <Card
            name="Ольга"
            age="25 лет"
            desc="Занималась по программе «Сделай или сдохни» и добилась невероятных жертв в рядах целюлита за 2 месяца"
            imageUrl={image3}
          />
        </div>
        <div className={styles.slideWrapper}>
          <Card
            name="Ольга"
            age="25 лет"
            desc="Занималась по программе «Сделай или сдохни» и добилась невероятных жертв в рядах целюлита за 2 месяца"
            imageUrl={image2}
          />
        </div>
        <div className={styles.slideWrapper}>
          <Card
            name="Ольга"
            age="25 лет"
            desc="Занималась по программе «Сделай или сдохни» и добилась невероятных жертв в рядах целюлита за 2 месяца"
            imageUrl={image3}
          />
        </div>
    </Slider>
  </BaseScreen>
}