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

    this.modalId = 'login';
  }

  onLogin = async () => {
    this.setState({ isLoading: true });

    const { email, password } = this.state;

    const { error, response } = await request(api.userLogin, 'POST', {
      email,
      password,
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

    if(error.status === 404){
      errorMessage = 'Такого пользователя не существует';
    }

    if(error.status === 403){
      errorMessage = 'Неверный пароль';
    }

    if(error.status === 400) {
      errorMessage = 'Не все поля заполнены';
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

  openRegistration = () => {
    this.close(true);
    this.props.actions.modals.openModal('registration');
  };

  render(){
    const modalData = this.modalData();
    const isHidden = !modalData || !modalData.isOpen;

    const {
      emailError,
      passwordError,
      isLoading,
      isError,
      errorMessage,
      email,
      password,
      showPayStub,
      courseId,
    } = this.state;

    return <BaseModal onClose={this.close} isHidden={isHidden}>
      <Title tag="h5" className={styles.title}>Вход</Title>
      <TextInput
        onChange={this.onChange('email')}
        title="Почта"
        errorMessage={emailError}
        val={email}
      />
      <TextInput
        onChange={this.onChange('password')}
        title="Пароль"
        errorMessage={passwordError} type="password"
        val={password}
      />
      <RedButton onClick={this.onLogin}>Войти</RedButton>
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
        className={styles.noAccount}
        onClick={this.openRegistration}
      >
        Нет аккаунта?
      </SmallButton>
      <PayStub isHidden={!showPayStub} courseId={courseId}/>
    </BaseModal>
  }
}