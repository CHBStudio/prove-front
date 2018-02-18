import styles from './styles.scss';


export default class extends Component{
  constructor(props){
    super(props);

    this.rootRef = null;
  }

  componentDidMount(){
    if(!this.rootRef) {
      return;
    }


  }

  render(){
    return <div
      className={styles.root}
      ref={ref => this.rootRef = ref}
    >

    </div>
  }
}