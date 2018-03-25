import { PROFILE_CHANGED } from '../actions/Types';

const defaultState = {
  timeline: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PROFILE_CHANGED:
      return {
        ...state,
        timeline: action.data,
      };
    default:
      return state;
  }
};
