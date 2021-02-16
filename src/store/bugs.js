import { createAction } from '@reduxjs/toolkit';

// Action creators
export const bugAdded = createAction("BUG_ADDED");

export const bugResolved = createAction("BUG_RESOLVED");

export const bugRemoved = createAction("BUG_REMOVED");

// Reducer
let lastId = 0;

export default function reducer(state = [], action) {

  switch (action.type) {

    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        }
      ];

    case bugRemoved.type:
      return state.filter(bug => bug.id !== action.payload.id);

    case bugResolved.type:
      return state.map(bug =>
        bug.id !== action.payload.id ?
          bug :
          { ...bug, resolved: true });

    default:
      return state;
  }
}
