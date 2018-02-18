export const USER__GET_LOAD = 'USER__GET_LOAD';
export const USER__GET_LOADED = 'USER__GET_LOADED';
export const USER__GET_ERROR = 'USER__GET_ERROR';

export const USER__SET_DATA = 'USER__SET_DATA';


export const userGet = () => ({
  type: USER__GET_LOAD,
});
export const userGetLoaded = () => ({
  type: USER__GET_LOADED,
});
export const userGetError = () => ({
  type: USER__GET_ERROR,
});

export const userSetData = (isLoggedIn, data) => ({
  type: USER__SET_DATA,
  data,
  isLoggedIn,
});


const actions = {
  userGet,
  userGetError,
  userGetLoaded,

  userSetData,
};


export default {
  USER__GET_LOAD,
  USER__GET_ERROR,
  USER__GET_LOADED,

  USER__SET_DATA,


  actions,
}