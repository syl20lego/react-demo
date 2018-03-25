import {FAILURE} from './Types';
import * as TweetsActions from './TweetsActions';

const failure = (error) => {
    return {
        type: FAILURE,
        data: error
    };
};

export const ActionCreators = {
    failure,
    ...TweetsActions,
};