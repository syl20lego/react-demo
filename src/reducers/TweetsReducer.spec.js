import reducers from './RootReducer'
import { CHANGE_PROFILE, PROFILE_CHANGED } from '../actions/Types'

describe('Testing Tweets reducer', () => {
    it('should ignore change profile', () => {
        let state = reducers.tweets({dummy: true}, {
            type: CHANGE_PROFILE
        });
        expect(state).toEqual({
            dummy: true
        })
    });
    it('should update on profile changed', () => {
        let state = reducers.tweets({dummy: true}, {
            type: PROFILE_CHANGED,
            data: {updated: true}
        });
        expect(state).toEqual({
            dummy: true,
            timeline: {updated: true}
        })
    });
});