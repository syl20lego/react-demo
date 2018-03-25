import reducers from './RootReducer'
import { CHANGE_PROFILE } from '../actions/Types'

describe('Testing Tweets reducer', () => {
    it('should ignore change profile', () => {
        let state = reducers.tweets({dummy: true}, {
            type: CHANGE_PROFILE
        });
        expect(state).toEqual({
            dummy: true
        })
    });
});