import update from 'immutability-helper';

import actions from './actions';


const initialState = {
  isLoading: true,
  isError: false,
  isLoaded: false,
  isLoggedIn: false,
  data: null,
};

const actionsMap = {
  [actions.USER__GET_STATUS]: (state, { status='loading' }) => {
    return update(state, {
      isLoading: { $set: status === 'loading' },
      isError: { $set: status === 'error' },
      isLoaded:{ $set: status === 'loaded' },
    });
  },

  [actions.USER__SET_DATA]: (state, { isLoggedIn, data }) => {
    return update(state, {
      isLoggedIn: { $set: isLoggedIn },
      data: { $set: data }
    });
  },
};

export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
