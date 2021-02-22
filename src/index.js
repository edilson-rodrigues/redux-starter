import configureStore from './store/configureStore';
import { loadBugs, assignBugToUser } from './store/bugs';

const store = configureStore();

//UI layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 3)), 2000);




