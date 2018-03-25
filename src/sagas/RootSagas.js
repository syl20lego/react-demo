import { fork } from 'redux-saga/effects';
import tweetsSaga from './TweetsSaga';

const sagas = [
  ...tweetsSaga,
];

export default function* root() {
  yield sagas.map(saga => fork(saga));
}
