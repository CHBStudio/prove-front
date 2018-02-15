import propTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import urls from 'config/urls';

import Header from './Header';
import About from './About';
import Coach from './Coach';
import FAQ from './FAQ';
import Results from './Results';

import styles from './styles.scss';


class Landing extends Component{

  static propTypes = {
    pageName: propTypes.string,
  };

  static defaultProps = {
    pageName: urls.LANDING_PAGES.about,
  };

  constructor(props){
    super(props);
    this.pageRefs = {};
  }

  componentDidMount(){
    this.scrollToCurrent();
  }

  componentDidUpdate(){
    this.scrollToCurrent();
  }

  pageRef = pageName => ref => this.pageRefs[pageName] = ref;

  scrollToCurrent = () => {
    const pageRef = this.pageRefs[this.props.pageName];
    if(!pageRef){
      return;
    }
    scrollToComponent(pageRef, {
      align: 'middle',
      duration: 1000,
      ease:'inOutQuad',
    });
  };

  render(){
    return <div className={styles.root}>
      <Header/>
      <div className={styles.screensContainer}>
        <About pageRef={this.pageRef(urls.LANDING_PAGES.about)}/>
        <Coach pageRef={this.pageRef(urls.LANDING_PAGES.coach)}/>
        <FAQ pageRef={this.pageRef(urls.LANDING_PAGES.faq)}/>
        <Results pageRef={this.pageRef(urls.LANDING_PAGES.results)}/>
      </div>
    </div>
  }
}


export default () => {
  return <Switch>
    <Route path={`${urls.landing}/:pageName`} render={
      props => <Landing pageName={props.match.params.pageName}/>
    }/>
    <Redirect to={urls.landingAbout}/>
  </Switch>
}