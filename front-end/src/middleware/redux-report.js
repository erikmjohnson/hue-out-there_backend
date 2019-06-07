export default store => next => action => {
  try {
    console.log('__ACTION__', action);
    return next(action);

  } catch (error) {
    console.log('__ERROR__');
    action.error = error;
    return action;
  }
}
