import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
      {book.volumeInfo.title}
    </div>
  );
};

export default BookItem;
