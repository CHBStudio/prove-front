export const MODAL__OPEN = 'MODAL__OPEN';
export const MODAL__CLOSE = 'MODAL__CLOSE';
export const MODAL__SET_PROPS = 'MODAL__SET_PROPS';


export const openModal = (modalId) => ({
  type: MODAL__OPEN,
  modalId,
});
export const closeModal = (modalId) => ({
  type: MODAL__CLOSE,
  modalId,
});
export const setPropsModal = (modalId, props) => ({
  type: MODAL__SET_PROPS,
  modalId,
  props,
});


const actions = {
  openModal,
  closeModal,

  setPropsModal,
};


export default {
  MODAL__OPEN,
  MODAL__CLOSE,
  MODAL__SET_PROPS,

  actions,
}