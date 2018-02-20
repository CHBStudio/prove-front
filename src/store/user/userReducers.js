import update from 'immutability-helper';

import actions from './userActions';


const initialState = {
  isLoading: true,
  isError: false,
  isLoaded: false,
  isLoggedIn: false,
  data: null,
  wannaCourseId: null,
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

  [actions.USER__SET_WANNA_COURSE]: (state, { courseId }) => {
    return update(state, {
      wannaCourseId: { $set: courseId },
    });
  },
};

export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
