import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    postsGetRequest,
    selectPosts,
    selectPageCount,
} from './store/posts';
import { Link } from 'react-router-dom';

let timer;

function App() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const pageCount = useSelector(selectPageCount);
    const table = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const pages = new Array(pageCount);
    for (let i = 0; i < pageCount; i++) {
        pages[i] = true;
    }

    const scrollTo = index => setCurrentPage(index);

    const onScroll = event => console.log(event);

    useEffect(
        () => {
            dispatch(postsGetRequest({page: 0}));
            setInterval(
                () => {
                    dispatch(postsGetRequest({page: 0}));
                },
                10000
            );

            // document.addEventListener('scroll', onScroll);

            return () => {
                clearInterval(timer);
                // window.removeEventListener('scroll', onScroll);
            };
        },
        []
    );

    useEffect(
        () => {
            if (pageCount > 0) {
                table.current.querySelectorAll('tbody > tr')[currentPage * 20].scrollIntoView();
            }
        },
        [currentPage, pageCount]
    );

    return (
        <>
            <table ref={table}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>URL</th>
                        <th>Created at</th>
                        <th>Author</th>
                        <th>Look through</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(
                            (item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.url}</td>
                                    <td>{item.created_at}</td>
                                    <td>{item.author}</td>
                                    <td>
                                        <Link to={`/item/${index}`}>Look through</Link>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'fixed',
                    left: '20px',
                    bottom: '20px',
                    background: '#fff',
                    padding: '10px',
                    border: 'solid 1px #eee',
                    borderRadius: '5px'
                }}
            >
                {
                    pages.map(
                        (item, index) => (
                            item && <a
                                style={{
                                    padding: '5px',
                                    fontWeight: index === currentPage ? 'bold' : 'normal',
                                    cursor: 'pointer',
                                }}
                                onClick={() => scrollTo(index)}
                            >
                                {index + 1}
                            </a>
                        )
                    )
                }
            </div>
        </>
    );
}

export default App;
