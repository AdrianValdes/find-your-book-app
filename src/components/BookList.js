import React from 'react';
import BookItem from './BookItem';
import './App.css';
import { Segment } from 'semantic-ui-react';

const BookList = ({ books }) => {
  if (books) {
    return (
      <Segment id="externalContainerResults">
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
      </Segment>
    );
  } else {
    return <div>Sorry there is no results for your search :(</div>;
  }
};

export default BookList;
