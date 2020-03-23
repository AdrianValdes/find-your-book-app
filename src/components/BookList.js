import React from 'react';
import BookItem from './BookItem';
import './App.css';
import { Segment } from 'semantic-ui-react';

const BookList = ({ books }) => {
  if (books) {
    return (
      <Segment id="externalContainerResults">
        {books.map(book => {
          return <BookItem key={book.id} book={book.volumeInfo} />;
        })}
      </Segment>
    );
  } else {
    return <div>Sorry there is no results for your search :(</div>;
  }
};

export default BookList;
