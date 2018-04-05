import { ActionCreators } from './ActionCreators';
import { FAILURE } from './Types';

describe('Testing Generic actions', () => {
  it('Should create an action for failure', () => {
    const error = new Error();
    expect(ActionCreators.failure(error)).toEqual({
      type: FAILURE,
      data: error,
    });
  });
});
