import {ActionCreators} from './ActionCreators'
import { CHANGE_PROFILE, PROFILE_CHANGED } from './Types'

describe('Testing Tweets actions', () => {
    it('Should create an action to change profile', () => {
        expect(ActionCreators.changeProfile()).toEqual({
            type: CHANGE_PROFILE
        })
    });

    it('Should create an action when profile changed', () => {
        expect(ActionCreators.profileChanged({profile: test})).toEqual({
            type: PROFILE_CHANGED,
            data: {profile: test}
        })
    });
});