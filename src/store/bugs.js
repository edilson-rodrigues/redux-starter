import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { apiCallBegan } from './api';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetched: null
  },
  reducers: {
    // actions => actions handlers
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
    /* bugs/bugsReceived */
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
    },
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

export const {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed
} = slice.actions;

export default slice.reducer;

console.log(bugsReceived);

// Action Creators
const url = "/bugs";

export const loadBugs = () => apiCallBegan({
  url,
  onStart: bugsRequested.type,
  onSuccess: bugsReceived.type,
  onError: bugsRequestFailed.type,
});

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


