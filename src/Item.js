import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPost } from './store/posts';

function Item(props) {
    const post = useSelector(store => selectPost(store, props.match.params.index))
    return <>{JSON.stringify(post)}</>;
}

export default Item;
