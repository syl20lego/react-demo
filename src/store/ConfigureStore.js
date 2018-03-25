import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/RootReducer';
import rootSagas from '../sagas/RootSagas'

export default () =>{
    // middleware that logs actions
    const loggerMiddleware = createLogger({});
    
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers(rootReducer),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(loggerMiddleware, sagaMiddleware)
    );

    sagaMiddleware.run(rootSagas);

    return store;
} 