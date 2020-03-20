import React from 'react';
import { Image, Segment } from 'semantic-ui-react';

const BookItem = ({ book }) => {
  let bookImage;

  if (book.volumeInfo.imageLinks) {
    let image = book.volumeInfo.imageLinks.smallThumbnail;
    bookImage = image;
  } else {
    let image = 'no image';
    bookImage = image;
  }

  return (
    <Segment clearing style={{ cursor: 'pointer' }}>
      <a
        href={book.volumeInfo.previewLink}
        rel="noopener noreferrer"
        target="_blank"
        style={{ color: 'inherit' }}
      >
        <Image src={bookImage} alt="" floated="left" size="tiny" />{' '}
        <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          {book.volumeInfo.title}
        </span>
        <span> by {book.volumeInfo.authors}</span> (
        {book.volumeInfo.publishedDate})
        <br />
        {book.volumeInfo.description}
      </a>
    </Segment>
  );
};

export default BookItem;
