import {
    applyMiddleware,
    compose,
    createStore,
    combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

import {
    postsGetReducer,
    POSTS_GET_REQUEST,
} from './posts';
import postsGetRequestSaga from './posts/sagas/get-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
    posts: postsGetReducer,
});

function* appSaga() {
    yield takeEvery(POSTS_GET_REQUEST, postsGetRequestSaga);
}

export const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(appSaga);
