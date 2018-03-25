import {put, call, takeEvery} from 'redux-saga/effects'
import {ActionCreators} from '../actions/ActionCreators';
import {CHANGE_PROFILE} from '../actions/Types';

function* changeProfile(action) {

}

function* changeProfileSaga() {
    yield takeEvery(CHANGE_PROFILE, changeProfile);
}

export default [changeProfileSaga];