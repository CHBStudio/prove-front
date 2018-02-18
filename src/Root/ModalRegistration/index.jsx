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
};

@connect({ modals, user })
export default class extends Component{
  constructor(props){
    super(props);

    this.state = { ...initialState};

    this.modalId = 'registration';
  }

  onLogin = async () => {
    this.setState({ isLoading: true, isError: false });

    const { email, password, firstName } = this.state;

    const { error, response } = await request(api.userRegistration, 'POST', {
      email,
      password,
      first_name: firstName,
    });

    if(response){
      this.props.actions.user.userSetData(true, response.data.user);
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

  close = () => {
    this.setState(initialState);
    this.props.actions.modals.closeModal(this.modalId);
  };

  render(){
    const modalData = this.props.store.modals[this.modalId];
    const isHidden = !modalData || !modalData.isOpen;

    const { emailError, passwordError, firstNameError, isLoading, isError, errorMessage, email, password, firstName } = this.state;

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
      <RedButton onClick={this.onLogin}>Регистрация</RedButton>
      <FullSidesLoader isHidden={!isLoading}/>
      { isError && <p className={styles.errorMessage}>{ errorMessage }</p> }
    </BaseModal>
  }
}