import propTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import urls from 'config/urls';
import history from 'utils/history';

import Header from './Header';
import About from './About';
import Programs from './Programs';
import FAQ from './FAQ';
import Advantages from './Advantages';
import Coach from './Coach';
import Results from './Results';

import styles from './styles.scss';


class Landing extends Component{

  static propTypes = {
    pageName: propTypes.string,
    landing: propTypes.object.isRequired,
    user: propTypes.object.isRequired,
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
    this.scrollToPage(this.props.pageName, 1);
  }

  clearTimeout(){
    if(this.changeUrlTimeout){
      clearTimeout(this.changeUrlTimeout);
      this.changeUrlTimeout = null;
    }
  }

  scrollToPage = (pageName, scrollTime=1000) => {
    this.canChangeUrl = false;

    this.clearTimeout();
    this.changeUrlTimeout = setTimeout(() => {
      this.canChangeUrl = true; this.clearTimeout();
    }, scrollTime);

    const pageRef = this.pageRefs[pageName];
    if(!pageRef){
      return;
    }
    scrollToComponent(pageRef, {
      align: 'top',
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
    const { courses, faqs, results } = this.props.landing.data;

    return <div className={styles.root}>
      <Header onClickLink={this.scrollToPage}/>
      <div className={styles.screensContainer}>
        <About pageRef={this.pageRef(urls.LANDING_PAGES.about)} onEnter={this.changeUrl(urls.LANDING_PAGES.about)}/>
        <Programs
          pageRef={this.pageRef(urls.LANDING_PAGES.coach)}
          onEnter={this.changeUrl(urls.LANDING_PAGES.coach)}
          programs={courses}
        />
        <Advantages/>
        <Coach/>
        <FAQ
          pageRef={this.pageRef(urls.LANDING_PAGES.faq)}
          onEnter={this.changeUrl(urls.LANDING_PAGES.faq)}
          questions={faqs}
        />
        <Results
          pageRef={this.pageRef(urls.LANDING_PAGES.results)}
          onEnter={this.changeUrl(urls.LANDING_PAGES.results)}
          results={results}
        />
      </div>
    </div>
  }

  componentWillUnmount() {
    this.clearTimeout();
  }
}


export default ({ user, landing }) => {
  return <Switch>
    <Route path={`${urls.landing}/:pageName`} render={
      props => <Landing pageName={props.match.params.pageName} user={user} landing={landing}/>
    }/>
    <Redirect to={urls.landingAbout}/>
  </Switch>
}