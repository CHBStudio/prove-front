import propTypes from 'prop-types';
import Waypoint from 'react-waypoint';

import styles from './styles.scss';


class DesktopBaseScreen extends Component{

  static propTypes = {
    children: propTypes.any,
    pageRef: propTypes.func,
    className: propTypes.string,
    onEnter: propTypes.func,
    save: propTypes.bool,
    noListen: propTypes.bool,
    height: propTypes.number,
  };

  static defaultProps = {
    children: null,
    pageRef: () => {},
    className: '',
    onEnter: () => {},
    save: false,
    noListen: false,
    height: null,
  };

  constructor(props){
    super(props);

    this.ref = null;

    this.state = {
      needSecondWaypoint: false,
      width: 0,
    };
  }

  rootRef = ref => {
    this.props.pageRef(ref);
    this.ref = ref;
  };

  onResize = () => {
    const height = window.innerHeight;
    let needSecondWaypoint = false;

    if(this.ref && this.props.save){
      const screenHeight = this.ref.offsetHeight;
      needSecondWaypoint = screenHeight > height;
    }

    this.setState({ needSecondWaypoint, height });
  };

  componentWillMount(){
    if(!this.props.noListen){
      window.addEventListener('resize', this.onResize);
    }
  }

  componentDidMount(){
    this.onResize();
  }

  render(){

    const { onEnter, className, children, save, noListen, height: propHeight } = this.props;
    const { needSecondWaypoint, height: stateHeight } = this.state;

    const height = noListen ? propHeight : stateHeight;

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
    if(!this.props.noListen){
      window.removeEventListener('resize', this.onResize);
    }
  }
}



const MobileBaseScreen = ({ children, className, pageRef }) => {
  return <div className={cn(styles.root, className)} ref={pageRef}>
    { children }
  </div>
};


export default props => window.__IS_MOBILE__ ? <MobileBaseScreen {...props}/> : <DesktopBaseScreen {...props}/>















