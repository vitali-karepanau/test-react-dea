import axios from 'axios';

export const METHOD_GET = 'get';
export const METHOD_POST = 'post';
export const METHOD_PUT = 'put';
export const METHOD_DELETE = 'delete';

export const requestBuilder = ({
    method,
    data
}) => axios.request({
    baseURL: 'https://hn.algolia.com',
    method,
    [method === METHOD_GET ? 'params' : 'data']: {
        ...data,
        tags: 'story',
    },
    responseType: 'json',
    url: '/api/v1/search_by_date',
});
