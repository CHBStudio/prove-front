export const USER__GET_STATUS = 'USER__GET_LOAD';
export const USER__SET_DATA = 'USER__SET_DATA';
export const USER__LOGOUT = 'USER__LOGOUT';
export const USER__SET_WANNA_COURSE = 'USER__SET_WANNA_COURSE';


export const userGet = (status) => {
  return {
    type: USER__GET_STATUS,
    status,
  };
};

export const userSetData = (isLoggedIn, data) => ({
  type: USER__SET_DATA,
  data,
  isLoggedIn,
});

export const userSetWannaCourse = (courseId) => ({
  type: USER__SET_WANNA_COURSE,
  courseId,
});

export const userLogout = () => ({
  type: USER__LOGOUT,
});


const actions = {
  userGet,
  userSetData,
  userLogout,
  userSetWannaCourse,
};


export default {
  USER__GET_STATUS,
  USER__SET_DATA,
  USER__LOGOUT,
  USER__SET_WANNA_COURSE,

  actions,
}