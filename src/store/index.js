import { combineReducers } from 'redux';

import user from './user';
import modals from './modals';
import landing from './landing';


const reducers = combineReducers({
  user: user.reducers,
  modals: modals.reducers,
  landing: landing.reducers,
});

const sagas = [].concat(
  user.sagas,
  modals.sagas,
  landing.sagas,
);

const actions = {
  user: user.actions,
  modals: modals.actions,
  landing: landing.actions,
};


export {
  user,
  modals,
  landing,
};

export default {
  reducers,
  sagas,
  actions,
}