import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default (entitiesToAction={}) => component => {
  return connect(
    store => ({ store }),
    dispatch => {
      const connectedActions = {};
      Object.keys(entitiesToAction).forEach(entityKey => {
        connectedActions[entityKey] = bindActionCreators(entitiesToAction[entityKey].actions.actions, dispatch);
      });
      return { actions: connectedActions };
    },
    null,
    {pure:false}
  )(component);
}
