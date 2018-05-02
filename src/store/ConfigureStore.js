import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import rootReducer from '../reducers/RootReducer';
import rootEpics from '../epics/RootEpics';
import { changeProfile } from '../libs/Twiter';

export default () => {
// middleware that logs actions
  const loggerMiddleware = createLogger({});

  const epicMiddleware = createEpicMiddleware(combineEpics(...rootEpics), {
    dependencies: { changeProfile },
  });
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    combineReducers(rootReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(loggerMiddleware, epicMiddleware),
  );
  /* eslint-enable */

  return store;
};
