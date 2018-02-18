import update from 'immutability-helper';

import actions from './actions';


const initialState = {
  isLoading: false,
  isError: false,
  isLoaded: false,
  isLoggedIn: false,
  data: null,
};

const actionsMap = {
  [actions.USER__GET_LOAD]: (state) => {
    return update(state, {
      isLoading: { $set: true },
      isError: { $set: false },
      isLoaded:{ $set: false },
    });
  },

  [actions.USER__GET_ERROR]: (state) => {
    return update(state, {
      isLoading: { $set: false },
      isError: { $set: true },
      isLoaded:{ $set: false },
    });
  },

  [actions.USER__GET_LOADED]: (state) => {
    return update(state, {
      isLoading: { $set: false },
      isError: { $set: false },
      isLoaded:{ $set: true },
    })
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
