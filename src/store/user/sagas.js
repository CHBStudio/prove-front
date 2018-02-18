import api from 'config/api';
import saga from 'utils/saga';
import request from 'utils/request';

import actions from './actions';


const userGet = saga(async (store, action) => {

  const { response, error } = await request(api.landingGet);

  console.warn(response);
  console.warn(error);

  // console.log('dispatching', action);
  // let result = next(action);
  // console.log('next state', store.getState());
  // return result;



}, actions.USER__GET_LOAD);


export default [
  userGet,
]
