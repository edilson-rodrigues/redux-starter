import store from './store/store';
import { bugAdded } from './store/actions/actions'


// state = reducer(state, action)
// notify the subscribers

store.dispatch(bugAdded("BUG 1"));

console.log(store.getState());