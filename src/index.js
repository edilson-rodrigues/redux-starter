import store from './store/store';

store.dispatch({
  type: 'BUG_ADDED',
  payload: {
    description: "BUG",
  }
});

store.dispatch({
  type: 'BUG_REMOVED',
  payload: {
    id: 1,
  }
});


console.log(store.getState());