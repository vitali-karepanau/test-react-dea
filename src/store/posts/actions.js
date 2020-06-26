import {
    POSTS_GET_REQUEST,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,
    POSTS_CHANGE_CURRENT_PAGE,
} from './';

export const postsGetRequest = (data) => ({
    type: POSTS_GET_REQUEST,
    data,
});

export const postsGetSuccess = (data) => ({
    type: POSTS_GET_SUCCESS,
    data,
});

export const postsGetFailure = (data) => ({
    type: POSTS_GET_FAILURE,
    data,
});
