export default (asyncAction, actionType) => store => next => action => {
  if(action.type === actionType){
    const result = asyncAction(store, action);
    next(action);
    return result;
  }
}