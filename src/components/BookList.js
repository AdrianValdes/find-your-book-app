import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  const renderedBooks = books.map(book => {
    return <BookItem book={book} />;
  });
  return <div>{renderedBooks}</div>;
};

export default BookList;
