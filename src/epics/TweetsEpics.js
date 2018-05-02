import Rx from 'rxjs';

import { ActionCreators } from '../actions/ActionCreators';
import { CHANGE_PROFILE } from '../actions/Types';

// switchMap to avoid concurency + Observable.of() for catch
const changeProfileEpic = (action$, store, { changeProfile }) =>
  action$.ofType(CHANGE_PROFILE)
    .throttleTime(300)
    .map(action => action.data)
    .map(changeProfile)
    .map(ActionCreators.profileChanged);

export default [changeProfileEpic];
