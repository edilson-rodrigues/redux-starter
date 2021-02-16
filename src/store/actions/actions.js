import { BUG_ADDED, BUG_RESOLVED } from '../actions/actionTypes'

export const bugAdded = description => ({
  type: BUG_ADDED,
  payload: {
    description
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

export const bugResolved = id => ({
  type: BUG_RESOLVED,
  payload: {
    id
  }
})
