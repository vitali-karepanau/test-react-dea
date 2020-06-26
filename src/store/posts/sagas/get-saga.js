import {
    call,
    put,
} from 'redux-saga/effects';
import { postsGetSuccess, postsGetFailure } from '..';
import { METHOD_GET, requestBuilder } from '../../../helpers';

export default function* postsGetRequestSaga({data: {page}}) {
    try {
        const d = yield call(
            requestBuilder,
            {
                method: METHOD_GET,
                data: {
                    page,
                },
            }
        );

        yield put(postsGetSuccess(d.data.hits));
    } catch (error) {
        yield put(postsGetFailure(error));
    }
}
