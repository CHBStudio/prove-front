import Title from 'components/Title';
import RedButton from 'components/RedButton';
import { SmallButton } from "components/SmallButtons";
import BaseModal from 'components/BaseModal';
import TextInput from 'components/TextInput';
import FullSidesLoader from 'components/FullSidesLoader';
import connect from 'utils/connect'
import { modals, user } from 'store';
import request from 'utils/request';
import api from 'config/api';

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
      this.props.actions.user.userSetData(true, response.data.user);

      const { wannaCourseId=null } = this.props.store.user;

      if( wannaCourseId !== null){
        this.setState({
          isLoading: false,
          isError: false,
          showPayStub: true,
          courseId: wannaCourseId,
        });
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

  close = () => {
    this.setState(initialState);
    this.props.actions.user.userSetWannaCourse(null);
    this.props.actions.modals.closeModal(this.modalId);
  };

  modalData = () => this.props.store.modals[this.modalId];

  openRegistration = () => {
    this.close();
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