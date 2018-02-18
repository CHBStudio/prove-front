import { combineReducers } from 'redux';

import user from './user';


const reducers = combineReducers({
  user: user.reducers,
});

const sagas = [].concat(
  user.sagas
);

const actions = {
  user: user.actions,
};


export {
  user,
};

export default {
  reducers,
  sagas,
  actions,
}