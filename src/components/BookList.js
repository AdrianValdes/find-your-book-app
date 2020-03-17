import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onBookSelect }) => {
  const renderedBooks = books.map(book => {
    return <BookItem onBookSelect={onBookSelect} book={book} />;
  });
  return <div>{renderedBooks}</div>;
};

export default BookList;
