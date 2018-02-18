import propTypes from 'prop-types';
import Waypoint from 'react-waypoint';

import styles from './styles.scss';


export default class extends Component{

  static propTypes = {
    children: propTypes.any,
    pageRef: propTypes.func,
    className: propTypes.string,
    onEnter: propTypes.func,
    save: propTypes.bool,
  };

  static defaultProps = {
    children: null,
    pageRef: () => {},
    className: '',
    onEnter: () => {},
    save: false,
  };

  constructor(props){
    super(props);

    this.ref = null;

    this.state = {
      needSecondWaypoint: false,
      screenHeight: 0,
      width: 0,
      height: 0,
    };
  }

  rootRef = ref => {
    this.props.pageRef(ref);
    this.ref = ref;
  };

  onResize = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    let needSecondWaypoint = false;
    let screenHeight = 0;

    if(this.ref && this.props.save){
      screenHeight = this.ref.offsetHeight;
      needSecondWaypoint = screenHeight > height;
    }

    this.setState({ needSecondWaypoint, height, width, screenHeight });
  };

  componentWillMount(){
    window.addEventListener('resize', this.onResize);
  }

  componentDidMount(){
    this.onResize();
  }

  render(){

    const { onEnter, className, children, save } = this.props;
    const { needSecondWaypoint, height } = this.state;

    const firstWaypointStyle = needSecondWaypoint ? { top: `${height/2}px` } : { top: '50%' };
    const secondWaypointStyle = { bottom: `${height/2}px` };
    const rootStyle = save ? { height: 'auto' } : { height: `${height}px` };

    return <div
      ref={this.rootRef}
      className={cn(styles.root, className)}
      style={rootStyle}
    >
      <div className={styles.waypoint} style={firstWaypointStyle}>
        <Waypoint
          onEnter={onEnter}
          fireOnRapidScroll={false}
          scrollableAncestor={window}
        />
      </div>
      { children }
      { needSecondWaypoint && <div
        className={styles.waypoint}
        style={secondWaypointStyle}
      >
        <Waypoint
          onEnter={onEnter}
          fireOnRapidScroll={false}
          scrollableAncestor={window}
        />
      </div> }
    </div>
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.onResize);
  }
}















