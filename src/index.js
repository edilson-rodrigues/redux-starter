import configureStore from './store/configureStore';
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser
} from './store/bugs';
import { projectAdded } from './store/projects';
import { usersAdded } from './store/users';

const store = configureStore();

store.dispatch(usersAdded({ name: 'Edilson' }));
store.dispatch(usersAdded({ name: 'Moisés' }));
store.dispatch(projectAdded({ name: 'Project 1' }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));

//exercise - get bug user
// add bug - user
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
//get bug - user
const bugs = getBugsByUser(1)(store.getState());
console.log('bug user', bugs);
