import update from 'immutability-helper';

import actions from './landingActions';


const initialState = {
  isLoading: true,
  isError: false,
  isLoaded: false,
  data: null,
};

const actionsMap = {
  [actions.LANDING__GET_STATUS]: (state, { status='loading' }) => {
    return update(state, {
      isLoading: { $set: status === 'loading' },
      isError: { $set: status === 'error' },
      isLoaded:{ $set: status === 'loaded' },
    });
  },

  [actions.LANDING__SET_DATA]: (state, { data }) => {
    return update(state, {
      data: { $set: data }
    });
  },
};

export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
