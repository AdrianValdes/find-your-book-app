import React from 'react';

const BookItem = ({ book }) => {
  let imageF;
  if (book.volumeInfo.imageLinks) {
    let image = book.volumeInfo.imageLinks.thumbnail;
    imageF = image;
  } else {
    let image = 'no image';
    imageF = image;
  }
  return (
    <div>
      <img src={imageF} alt="" />
      <div>{book.volumeInfo.title}</div>
      {book.volumeInfo.authors}
    </div>
  );
};

export default BookItem;
