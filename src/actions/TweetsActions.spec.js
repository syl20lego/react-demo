import {ActionCreators} from './ActionCreators'
import { CHANGE_PROFILE } from '../actions/Types'

describe('Testing Users actions', () => {
    it('Should create an action to change profile', () => {
        const expectedAction = {
            type: CHANGE_PROFILE
        };
        expect(ActionCreators.changeProfile()).toEqual(expectedAction)
    });
});