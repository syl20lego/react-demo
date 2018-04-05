import { put, call, takeLatest, throttle } from 'redux-saga/effects';
import { ActionCreators } from '../actions/ActionCreators';
import { CHANGE_PROFILE } from '../actions/Types';
import { changeProfile } from '../libs/Twiter';

function* changeProfileEffect(action) {
  try {
    const { data: profile = {} } = action;
    const response = yield call(changeProfile, profile);
    yield put(ActionCreators.profileChanged(response));
  } catch (e) {
    // Return same value
    ActionCreators.failure(e);
  }
}

function* changeProfileSaga() {
  yield throttle(1000, CHANGE_PROFILE, changeProfileEffect);
}

export default [changeProfileSaga];
