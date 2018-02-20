import Slider from 'react-slick';
import './slider.scss';

import Title from 'components/Title';
import BaseScreen from '../components/BaseScreen';

import Card from './Card';
import NavArrow from './NavArrow';
import Anchor from './Anchor';

import styles from './styles.scss';


export default ({ pageRef, onEnter, results, scrollToPrograms }) => {
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
    save={true}
  >
    <Title className={styles.title}>Результаты</Title>
    <Slider {...settings}>
      {
        results.map((result, index) => <div
          className={styles.slideWrapper}
          key={index}
        >
          <Card
            title={result.title}
            description={result.description}
            imageUrl={'/' + result.photo}
          />
        </div>)
      }
    </Slider>
    <Anchor scrollToPrograms={scrollToPrograms}/>
  </BaseScreen>
}