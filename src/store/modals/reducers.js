import update from 'immutability-helper';

import actions from './actions';


const modalInitialState = {
  isOpen: false,
  props: {},
};

const initialState = {};


const initModalIfNeed = (state, modalId) => {
  if(!state[modalId]){
    return update(state,
      { [modalId]: { $set: modalInitialState } }
    );
  }

  return state;
};


const actionsMap = {
  [actions.MODAL__OPEN]: (state, { modalId }) => {
    return update(initModalIfNeed(state, modalId), {
      [modalId]: {
        isOpen: { $set:  true },
      }
    });
  },
  [actions.MODAL__CLOSE]: (state, { modalId }) => {
    return update(initModalIfNeed(state, modalId), {
      [modalId]: {
        isOpen: { $set:  false },
      }
    });
  },
  [actions.MODAL__SET_PROPS]: (state, { modalId, props={} }) => {
    return update(initModalIfNeed(state, modalId), {
      [modalId]: {
        props: { $set:  props },
      }
    });
  },
};


export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
