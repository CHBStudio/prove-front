export const LANDING__GET_STATUS = 'LANDING__GET_STATUS';

export const LANDING__SET_DATA = 'LANDING__SET_DATA';


export const landingGet = (status) => ({
  type: LANDING__GET_STATUS,
  status,
});

export const landingSet = (data) => ({
  type: LANDING__SET_DATA,
  data,
});


const actions = {
  landingGet,
  landingSet,
};


export default {
  LANDING__GET_STATUS,
  LANDING__SET_DATA,

  actions,
}