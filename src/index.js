import store from './store/store';
console.log('store', store);
import { bugAdded, bugResolved } from './store/actions/actions'


// state = reducer(state, action)
// notify the subscribers

store.dispatch(bugAdded("BUG 1"));
store.dispatch(bugResolved(1));

console.log(store.getState());