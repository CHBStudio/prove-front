import propTypes from 'prop-types';

import Title from 'components/Title';

import styles from './styles.scss';


export default class extends Component{

  static propTypes = {
    title: propTypes.string,
  };

  constructor(props){
    super(props);

    this.textRef = null;
    this.titleRef = null;

    this.state = {
      isOpen: false,
      didMount: false,
    };

    this.textHeight = null
  }

  componentDidMount(){
    if(!this.textRef) {
      return;
    }
    this.textHeight = this.textRef.offsetHeight;
    this.setState({ didMount: true });
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render(){
    const { didMount, isOpen } = this.state;

    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda, autem beatae cum delectus doloribus eveniet harum in inventore mollitia nemo, nulla possimus quia repellat rerum, voluptatum. Laborum, voluptates!';

    return <div
      className={styles.root}
    >
      <div className={styles.topBar} onClick={this.toggle}>
        <Title tag="h3" className={styles.title}>
          { this.props.title }
        </Title>
        <div className={cn(styles.line, isOpen && styles.lineActive)}/>
      </div>
      { !didMount && <div
        className={styles.text}
        ref={ref => this.textRef = ref}
      >
        { text }
      </div> }
      { didMount && <div
        className={styles.text}
        style={{
          height: `${ isOpen ? this.textHeight : 0 }px`,
          opacity: `${ isOpen ? 1 : 0 }`,
        }}
      >
        { text }
      </div> }
    </div>
  }
}