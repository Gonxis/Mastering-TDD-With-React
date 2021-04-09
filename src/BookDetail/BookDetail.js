import React from 'react';

const getDescriptionFor = (book) => {
    return book.description ? book.description : book.name;
}

/*
const truncateDescriptionTo300Chars = (str) => {
    return str.length > 300 ? str.slice(0, 300) + '....' : str;
}
*/

const BookDetail = ({book}) => {
    return (<div className='detail'>
        <h2 className='book-title'>{book.name}</h2>
        <p className='book-description'>{getDescriptionFor(book)}</p>
    </div>)
}

export default BookDetail;