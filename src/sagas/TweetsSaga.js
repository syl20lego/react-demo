import {put, call, takeEvery} from 'redux-saga/effects'
import {ActionCreators} from '../actions/ActionCreators';
import {CHANGE_PROFILE} from '../actions/Types';
import {changeProfile} from '../libs/Twiter';

function* changeProfile(action) {
    try {
        const response = yield call(changeProfile, action.data.profile);
        yield put(ActionCreators.profileChanged(response));
    } catch (e) {
        //Return same value
        ActionCreators.failure(e);
    }
}

function* changeProfileSaga() {
    yield takeEvery(CHANGE_PROFILE, changeProfile);
}

export default [changeProfileSaga];