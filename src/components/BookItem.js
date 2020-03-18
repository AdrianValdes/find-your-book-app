import React from 'react';
import { Image, Divider } from 'semantic-ui-react';

const BookItem = ({ book }) => {
  let bookImage;

  if (book.volumeInfo.imageLinks) {
    let image = book.volumeInfo.imageLinks.thumbnail;
    bookImage = image;
  } else {
    let image = 'no image';
    bookImage = image;
  }

  return (
    <div style={{ cursor: 'pointer' }}>
      <a
        href={book.volumeInfo.previewLink}
        rel="noopener noreferrer"
        target="_blank"
        style={{ color: 'inherit' }}
      >
        <div>
          <Image src={bookImage} alt="" verticalAlign="middle" />{' '}
          <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
            {book.volumeInfo.title}
          </span>
          <span>
            {' '}
            by {book.volumeInfo.authors} <br />
          </span>
        </div>
        <br />
        {book.volumeInfo.description}
      </a>
      <Divider />
    </div>
  );
};

export default BookItem;
