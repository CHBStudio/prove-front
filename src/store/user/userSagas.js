import api from 'config/api';
import saga from 'utils/saga';
import request from 'utils/request';

import actions, { userGet, userSetData, } from './userActions';


const userGetSaga = saga(async (store, action, dispatch) => {
  const { response, error } = await request(api.userGet);

  if(response){
    const { user=null } = response.data;
    dispatch(userSetData(Boolean(user), user));
    dispatch(userGet('loaded'));
    return;
  }

  dispatch(userGet('error'));
}, actions.USER__GET_STATUS);


const userLogout = saga(async (store, action, dispatch) => {
  dispatch(userGet('loading'));

  const { response, error } = await request(api.userLogout, 'POST');

  if(response){
    dispatch(userSetData(false, null));
    dispatch(userGet('loaded'));
    return;
  }

  dispatch(userGet('error'));
}, actions.USER__LOGOUT);


export default [
  userGetSaga,
  userLogout,
]
