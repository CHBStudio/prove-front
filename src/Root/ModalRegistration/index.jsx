import Title from 'components/Title';
import RedButton from 'components/RedButton';
import { SmallButton } from "components/SmallButtons";
import BaseModal from 'components/BaseModal';
import TextInput from 'components/TextInput';
import FullSidesLoader from 'components/FullSidesLoader';
import SocialButton from 'components/SocialButton';
import connect from 'utils/connect'
import { modals, user } from 'store';
import request from 'utils/request';
import api from 'config/api';
import history from 'utils/history';
import urls from 'config/urls';

import PayStub from '../components/PayStub';

import styles from './styles.scss';

const initialState = {
  firstName: '',
  firstNameError: null,

  email: '',
  emailError: null,

  password: '',
  passwordError: null,

  isLoading: false,
  isError: false,
  errorMessage: null,

  showPayStub: false,
  courseId: null,
};

@connect({ modals, user })
export default class extends Component{
  constructor(props){
    super(props);

    this.state = { ...initialState};

    this.modalId = 'registration';
  }

  onRegistration = async () => {
    this.setState({ isLoading: true, isError: false });

    const { email, password, firstName } = this.state;

    const { error, response } = await request(api.userRegistration, 'POST', {
      email,
      password,
      first_name: firstName,
    });

    if(response){
      const { user } = response.data;
      this.props.actions.user.userSetData(true, user);

      const { wannaCourseId=null } = this.props.store.user;

      if( wannaCourseId !== null){
        if(user.courses.indexOf(wannaCourseId) >= 0){
          this.close();
          history.push(urls.internalCoursesPage(wannaCourseId));
        }else{
          this.setState({
            isLoading: false,
            isError: false,
            showPayStub: true,
            courseId: wannaCourseId,
          });
        }
        this.props.actions.user.userSetWannaCourse(null);
        return;
      }

      this.close();
      return;
    }

    let errorMessage = 'Произошла ошибка, обновите страницу и повторите попытку позже';

    if(error.status === 400) {
      if(error.data && error.data[0] === 'Email not unique'){
        errorMessage = 'Такая почта уже зарегистрирована';
      }else{
        errorMessage = 'Не все поля заполнены';
      }
    }

    this.setState({ isLoading: false, isError: true, errorMessage });
  };

  onChange = inputName => e => {
    this.setState({ [inputName]: e.target.value });
  };

  close = (noClearUsersCourses=false) => {
    this.setState(initialState);
    !noClearUsersCourses && this.props.actions.user.userSetWannaCourse(null);
    this.props.actions.modals.closeModal(this.modalId);
  };

  modalData = () => this.props.store.modals[this.modalId];

  openLogin = () => {
    this.close(true);
    this.props.actions.modals.openModal('login');
  };

  render(){
    const modalData = this.modalData();
    const isHidden = !modalData || !modalData.isOpen;

    const {
      emailError,
      passwordError,
      firstNameError,
      isLoading,
      isError,
      errorMessage,
      email,
      password,
      firstName,
      showPayStub,
      courseId,
    } = this.state;

    return <BaseModal onClose={this.close} isHidden={isHidden}>
      <Title tag="h5" className={styles.title}>Регистрация</Title>
      <TextInput
        onChange={this.onChange('firstName')}
        title="Имя"
        errorMessage={firstNameError}
        value={firstName}
      />
      <TextInput
        onChange={this.onChange('email')}
        title="Почта"
        errorMessage={emailError}
        val={email}
      />
      <TextInput
        onChange={this.onChange('password')}
        title="Пароль"
        errorMessage={passwordError}
        type="password"
        val={password}
      />
      <RedButton onClick={this.onRegistration}>Регистрация</RedButton>
      <a href={api.vkSocialLogin}>
        <SocialButton type="vk" className={styles.socialBtn}/>
      </a>
      <a href={api.fbSocialLogin}>
        <SocialButton type="fb" className={styles.socialBtn}/>
      </a>
      <FullSidesLoader isHidden={!isLoading}/>
      { isError && <p className={styles.errorMessage}>{ errorMessage }</p> }
      <br/>
      <SmallButton
        className={styles.hasAccount}
        onClick={this.openLogin}
      >
        Уже есть аккаунт?
      </SmallButton>
      <PayStub isHidden={!showPayStub} courseId={courseId}/>
    </BaseModal>
  }
}