import propTypes from 'prop-types';

import styles from './styles.scss';


export default class extends Component{

  static propTypes = {
    className: propTypes.string,
    children: propTypes.any,
    pageRef: propTypes.func,
    save: propTypes.bool,
  };

  static defaultProps = {
    className: '',
    children: null,
    pageRef: () => {},
    save: false,
  };

  constructor(props){
    super(props);

    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    }
  }

  fit = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  componentWillMount(){
    window.addEventListener('resize', this.fit);
  }

  render(){
    return <section
      style={{
        [this.props.save ? 'minHeight' : 'height']: `${this.state.height}px`,
        width: `${this.state.width}px`
      }}
      className={cn(styles.root, this.props.className)}
      ref={this.props.pageRef}
    >
      { this.props.children }
    </section>
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.fit);
  }
}