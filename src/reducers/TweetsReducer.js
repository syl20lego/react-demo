import { PROFILE_CHANGED } from '../actions/Types';

const defaultState = {
    timeline : null
};

const reducer = (state = defaultState, action) => {
    console.log('REDUCER', state, action)
    switch (action.type) {
        case PROFILE_CHANGED:
        return {
            ...state,
            timeline: action.data
        }; 
        default:
            return state;
    }
}

export default reducer;