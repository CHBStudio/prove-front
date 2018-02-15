import propTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import urls from 'config/urls';
import history from 'utils/history';

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

    this.canChangeUrl = true;
    this.changeUrlTimeout = null;
  }

  componentDidMount(){
    this.scrollToPage(this.props.pageName, 0);
  }

  clearTimeout(){
    if(this.changeUrlTimeout){
      clearTimeout(this.changeUrlTimeout);
      this.changeUrlTimeout = null;
    }
  }

  scrollToPage = (pageName, scrollTime=1000) => {
    this.canChangeUrl = false;

    this.changeUrlTimeout = setTimeout(() => {
      this.canChangeUrl = true; this.clearTimeout();
    }, scrollTime);

    const pageRef = this.pageRefs[pageName];
    if(!pageRef){
      return;
    }
    scrollToComponent(pageRef, {
      align: 'middle',
      duration: scrollTime,
      ease:'inOutQuad',
    });
  };

  changeUrl = pageName => () => {
    if(!this.canChangeUrl){
      return;
    }
    history.push(`${urls.landing}/${pageName}`);
  };

  pageRef = pageName => ref => this.pageRefs[pageName] = ref;

  render(){
    return <div className={styles.root}>
      <Header onClickLink={this.scrollToPage}/>
      <div className={styles.screensContainer}>
        <About pageRef={this.pageRef(urls.LANDING_PAGES.about)} onEnter={this.changeUrl(urls.LANDING_PAGES.about)}/>
        <Coach pageRef={this.pageRef(urls.LANDING_PAGES.coach)} onEnter={this.changeUrl(urls.LANDING_PAGES.coach)}/>
        <FAQ pageRef={this.pageRef(urls.LANDING_PAGES.faq)} onEnter={this.changeUrl(urls.LANDING_PAGES.faq)}/>
        <Results pageRef={this.pageRef(urls.LANDING_PAGES.results)} onEnter={this.changeUrl(urls.LANDING_PAGES.results)}/>
      </div>
    </div>
  }

  componentWillUnmount() {
    this.clearTimeout();
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