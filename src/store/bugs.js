import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import axios from 'axios';
import moment from 'moment';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
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
      bugs.lastFetch = Date.now();
    },
    bugAssignedToUser: (bugs, action) => {
      const { id: bugId, userId } = action.payload;
      const idx = bugs.list.findIndex(bug => bug.id === bugId);
      bugs.list[idx].userId = userId;
    },
    // command - event
    // addBug - bugAdded
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
    //resolveBug (command) - bugResolved (event)
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

// assignature this function: () => {} // fn(dispatch, getState)
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

  if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestFailed.type,
    }),
  );
}
// make an api call
// promisse resolved => dispatch(success)


export const addBug = bug => apiCallBegan({
  url,
  method: 'post',
  data: bug,
  onSuccess: bugAdded.type,

});

export const resolveBug = id => apiCallBegan({
  //bugs,
  // PATCH/bugs/1
  url: `${url}/${id}`,
  method: 'patch',
  data: { resolved: true },
  onSuccess: bugResolved.type,
});

export const assignBugToUser = (bugId, userId) => apiCallBegan({
  url: `${url}/${bugId}`,
  method: 'patch',
  data: { userId },
  onSuccess: bugAssignedToUser.type,
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


