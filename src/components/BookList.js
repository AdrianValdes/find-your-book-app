import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onBookSelect }) => {
  const renderedBooks = books.map(book => {
    return <BookItem key={book.id} onBookSelect={onBookSelect} book={book} />;
  });
  return <div>{renderedBooks}</div>;
};

export default BookList;
