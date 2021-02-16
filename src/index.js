import store from './customStore';
import * as actions from './store/actions/actions';


store.dispatch(actions.bugAdded("Bug 1"));

console.log('getstate', store.getState());


