import * as actions from '../types/types';

export function color(state = 'blue', action) {
  switch (action.type) {
    case actions.TOGGLE_BOX_COLOR:
      state = state === 'blue' ? 'red' : 'blue'
      return state;
    default:
      return state
  }
}
