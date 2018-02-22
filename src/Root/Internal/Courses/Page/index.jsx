import propTypes from 'prop-types';

import Title from 'components/Title';
import FullSidesLoader from 'components/FullSidesLoader';
import request from 'utils/request';
import api from 'config/api';
import history from 'utils/history';
import urls from 'config/urls';

import DayNavigator from './DayNavigator';
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

      activeDay: 0,
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

  onChangeDay = activeDay => this.setState({ activeDay });

  render(){
    const { isLoading, data, isLoaded, activeDay } = this.state;

    return <div className={styles.root}>
      <FullSidesLoader isHidden={!isLoading}/>
      { isLoaded && <div className={styles.container}>
        <Title className={styles.title}>{ data.course.title }</Title>
        <p className={styles.text}>{ data.course.description }</p>
        <DayNavigator
          activeIndex={activeDay}
          onChangeIndex={this.onChangeDay}
        />
        { activeDay < 7 && <Day data={data.schedule[activeDay]}/> }
        { activeDay === 7 && <p className={styles.formatedText}>{ data.course.food }</p> }
        { activeDay === 8 && <p className={styles.formatedText}>{ data.course.extra }</p> }
      </div> }
    </div>
  }
}