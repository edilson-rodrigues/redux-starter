// Action types
const BUG_ADDED = "BUG_ADDED";
const BUG_REMOVED = "BUG_REMOVED";
const BUG_RESOLVED = "BUG_RESOLVED";

// Action creators
export const bugAdded = description => ({
  type: BUG_ADDED,
  payload: {
    description
  }
});

export const bugResolved = id => ({
  type: BUG_RESOLVED,
  payload: {
    id
  }
});

// Reducer

let lastId = 0;

export default function reducer(state = [], action) {

  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        }
      ];

    case BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);

    case BUG_RESOLVED:
      return state.map(bug =>
        bug.id !== action.payload.id ?
          bug :
          { ...bug, resolved: true });

    default:
      return state;
  }
}
