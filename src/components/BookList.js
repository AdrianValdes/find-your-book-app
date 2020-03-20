import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  if (books) {
    return (
      <div>
        {books.map(book => {
          return <BookItem key={book.id} book={book} Accordion />;
        })}
      </div>
    );
  } else {
    return <div>Sorry there is no results for your search :(</div>;
  }
};

export default BookList;
