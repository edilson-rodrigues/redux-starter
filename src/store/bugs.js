import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loaded: false,
    lastFetched: null
  },
  reducers: {
    // actions => actions handlers
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const idx = bugs.list.findIndex(bug => bug.id === bugId);
      bugs.list[idx].userId = userId;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex(bug => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    }
  }
});

console.log('slice', slice)
export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;

export default slice.reducer;

/* // Selectors
export const getUnresolvedBugs = state =>
  state.entities.bugs.filter(bug => !bug.resolved); */

// Memoization
// bugs => get unresolved bugs from cache
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs, projects) => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId =>
  createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId),
  );


