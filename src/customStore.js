import reducer from './store/reducer/reducer';

function createStore(reducer) {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    // call the reducer to get the new state
    state = reducer(state, action);
  }

  return {
    dispatch,
    getState
  }
}

export default createStore(reducer);