import store from './store/store';

//listen
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
})

//actions
store.dispatch({
  type: 'BUG_ADDED',
  payload: {
    description: "BUG",
  }
});

unsubscribe();

store.dispatch({
  type: 'BUG_REMOVED',
  payload: {
    id: 1,
  }
});



console.log(store.getState());