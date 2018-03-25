import { CHANGE_PROFILE } from '../actions/Types';

const defaultState = {
    profile : {}
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;