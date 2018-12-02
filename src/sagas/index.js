import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { setUserProfile } from '../actions';

// watcher saga
export function* watchFetchUserProfile() {
    yield takeEvery("FETCH_USER_PROFILE", fetchUserProfile);
}

// worker saga
function* fetchUserProfile() {
    const response = yield call(axios.get, 'http://api.myjson.com/bins/17eyds');
    yield put(setUserProfile(response.data));
}