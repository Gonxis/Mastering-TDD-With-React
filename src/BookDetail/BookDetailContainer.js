import React from 'react';
import {useRemoteService} from '../hooks';
import BookDetail from './BookDetail';

const BookDetailContainer = ({match}) => {
    //const book = fetchBookById(match.params.id);
    const { data } = useRemoteService(`http://localhost:8080/books/${match.params.id}`, {});
    return (<BookDetail book={data} />);
}

export default BookDetailContainer;