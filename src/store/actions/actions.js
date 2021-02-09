import * as actions from '../actions/actionTypes'

export const bugAdded = description => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description,
  }
})

/* export function bugAdded(description) {
  //actions
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    }
  };
} */

