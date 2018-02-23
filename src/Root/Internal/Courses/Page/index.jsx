import propTypes from 'prop-types';

import Title from 'components/Title';
import FullSidesLoader from 'components/FullSidesLoader';
import request from 'utils/request';
import api from 'config/api';
import history from 'utils/history';
import urls from 'config/urls';

import DayNavigator from './DayNavigator';
import WeekNavigator from './WeekNavigator';
import Day from './Day';

import styles from './styles.scss';


export default class extends Component{

  static propTypes = {
    id: propTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isLoaded: false,

      data: null,

      activeDay: null,
      activeWeek: 0,

      showFood: false,
      showExtra: false,
    }
  }

  loadCourseData = async () => {
    this.setState({ isLoading: true, isLoaded: false });

    const { response, error } = await request(api.courseGet, 'GET', {
      id: this.props.id,
    });

    if(response){
      const { data } = response;
      this.setState({ data, isLoading: false, isLoaded: true });
      return;
    }

    history.push(urls.internalCoursesMy);
  };

  componentWillMount(){
    this.loadCourseData();
  }

  onChangeDay = activeDay => this.setState({ activeDay, showExtra: false, showFood: false });

  onChangeWeek = activeWeek => this.setState({ activeWeek, activeDay: null, showExtra: false, showFood: false });

  showFood = () => this.setState({ showFood: true, showExtra: false });

  showExtra = () => this.setState({ showExtra: true, showFood: false, });

  renderContent = () => {
    const { data, activeDay, activeWeek, showFood, showExtra, } = this.state;

    const weeks = data.schedule;
    const countWeeks = weeks.length;
    const daysArray = weeks[activeWeek];

    const currentActiveDay = activeDay === null ? daysArray[0].day : activeDay;

    const currentActiveDayObject = daysArray.filter(day => day.day === currentActiveDay)[0];

    return <div className={styles.container}>
      <Title className={styles.title}>{ data.course.title }</Title>
      <p className={styles.text}>{ data.course.description }</p>
      <WeekNavigator
        countWeeks={countWeeks}
        activeWeek={activeWeek}
        onChange={this.onChangeWeek}
        showFood={this.showFood}
        showExtra={this.showExtra}
        isFood={showFood}
        isExtra={showExtra}
      />
      { !showFood && !showExtra && <DayNavigator
        activeDay={currentActiveDay}
        onChange={this.onChangeDay}
        days={daysArray}
      /> }
      { !showFood && !showExtra && <Day data={currentActiveDayObject}/> }
      { showFood && <p className={styles.formatedText}>{ data.course.food }</p> }
      { showExtra && <p className={styles.formatedText}>{ data.course.extra }</p> }
    </div>
  };

  render(){
    const { isLoading, isLoaded } = this.state;

    return <div className={styles.root}>
      <FullSidesLoader isHidden={!isLoading}/>
      { isLoaded && this.renderContent() }
    </div>
  }
}