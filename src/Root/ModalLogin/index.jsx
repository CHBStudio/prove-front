import Title from 'components/Title';
import RedButton from 'components/RedButton';
import BaseModal from 'components/BaseModal';
import TextInput from 'components/TextInput';
import FullSidesLoader from 'components/FullSidesLoader';
import connect from 'utils/connect'
import { modals, user } from 'store';
import request from 'utils/request';
import api from 'config/api';

import styles from './styles.scss';


@connect({ modals, user })
export default class extends Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      emailError: null,

      password: '',
      passwordError: null,

      isLoading: false,
      isError: false,
      errorMessage: null,
    };

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
      this.setState({ isLoading: false, isError: false });
      this.props.actions.user.userSetData(true, response.user);
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
    this.props.actions.modals.closeModal(this.modalId);
  };

  render(){
    const modalData = this.props.store.modals[this.modalId];
    const isHidden = !modalData || !modalData.isOpen;

    const { emailError, passwordError, isLoading, isError, errorMessage } = this.state;

    return <BaseModal onClose={this.close} isHidden={isHidden}>
      <Title tag="h5" className={styles.title}>Вход</Title>
      <TextInput onChange={this.onChange('email')} title="Почта" errorMessage={emailError}/>
      <TextInput onChange={this.onChange('password')} title="Пароль" errorMessage={passwordError} type="password"/>
      <RedButton onClick={this.onLogin}>Войти</RedButton>
      <FullSidesLoader isHidden={!isLoading}/>
      { isError && <p className={styles.errorMessage}>{ errorMessage }</p> }
    </BaseModal>
  }
}