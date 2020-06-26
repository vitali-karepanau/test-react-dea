import {
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,
} from '../';

const initialState = {
    loading: false,
    success: false,
    failure: false,
    error: undefined,
    data: [],
    pageCount: 0,
};

export const postsGetReducer = (state = initialState, action) => {
    switch (action.type) {
        case POSTS_GET_REQUEST:
            return {
                ...state,
                success: false,
                failure: false,
                loading: true,
            };

        case POSTS_GET_SUCCESS:
            const temp = state.data;
            temp.splice(0, 0, ...action.data);
            return {
                ...state,
                loading: false,
                success: true,
                data: [...temp],
                pageCount: state.pageCount + 1,
            };

        case POSTS_GET_FAILURE:
            return {
                ...state,
                loading: false,
                failure: true,
                error: action.data,
            };

        default:
            return state;
    }
}
