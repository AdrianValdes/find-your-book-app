import React from 'react';
import { Image, Divider } from 'semantic-ui-react';

const BookItem = ({ book, onBookSelect }) => {
  let imageF;

  if (book.volumeInfo.imageLinks) {
    let image = book.volumeInfo.imageLinks.thumbnail;
    imageF = image;
  } else {
    let image = 'no image';
    imageF = image;
  }

  return (
    <div
      onClick={() => {
        onBookSelect(book);
      }}
      style={{ cursor: 'pointer' }}
    >
      <Image src={imageF} alt="" verticalAlign="middle" />

      <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
        {book.volumeInfo.title}
      </span>
      <span> by {book.volumeInfo.authors}</span>
      <span>
        {' '}
        <br />
        {book.volumeInfo.description}{' '}
      </span>

      <Divider />
    </div>
  );
};

export default BookItem;
