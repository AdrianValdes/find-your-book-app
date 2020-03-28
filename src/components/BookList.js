import React from 'react';
import BookItem from './BookItem';
import './App.css';

const BookList = ({ books }) => {
  if (books) {
    return (
      <div id="externalContainerResults">
        {books.map(
          ({
            volumeInfo: {
              id,
              publishedDate,
              imageLinks,
              authors,
              title,
              description,
              previewLink
            }
          }) => {
            return (
              <BookItem
                key={id}
                id={id}
                publishedDate={publishedDate}
                imageLinks={imageLinks}
                authors={authors}
                title={title}
                description={description}
                previewLink={previewLink}
              />
            );
          }
        )}
      </div>
    );
  } else {
    return <div>Sorry there is no results for your search :(</div>;
  }
};

export default BookList;
