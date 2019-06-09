export default store => next => action => {
  try {
    console.log('__ACTION__', action);
    const result = next(action);
    return result;

  } catch (error) {
    console.log('__ERROR__');
    action.error = error;
    return action;
  }
}
