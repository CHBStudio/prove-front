import api from 'config/api';
import saga from 'utils/saga';
import request from 'utils/request';

import actions, { landingGet, landingSet } from './actions';


const landingGetSaga = saga(async (store, action, dispatch) => {

  const { response, error } = await request(api.landingGet);

  if(response){
    dispatch(landingSet(response.data));
    dispatch(landingGet('loaded'));
    return;
  }

  dispatch(landingGet('error'));
}, actions.LANDING__GET_STATUS);


export default [
  landingGetSaga,
]
