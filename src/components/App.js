import React from 'react';
import SearchBar from './SearchBar';

import BookList from './BookList';
import { Segment, Container } from 'semantic-ui-react';

const KEY = 'AIzaSyCpLykouuOz1NzjMuy5fXuxkntk2eHVlCU';
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
let startIndex = 0;

class App extends React.Component {
  state = { books: [] };

  onFormSubmit = async ({
    searchedTitle,
    searchedAuthor,
    searchedPublisher,
    searchedSubject,
    searchedISBN,
    typeOfBook,
    downloadFormat
  }) => {
    if (searchedTitle) {
      searchedTitle = `+intitle:${searchedTitle}`;
    }

    if (searchedAuthor) {
      searchedAuthor = `+inauthor:${searchedAuthor}`;
    }
    if (searchedPublisher) {
      searchedPublisher = `+inpublisher:${searchedPublisher}`;
    }
    if (searchedSubject) {
      searchedSubject = `+subject:${searchedSubject}`;
    }
    if (searchedISBN) {
      searchedISBN = `+isbn:${searchedISBN}`;
    }
    if (typeOfBook) {
      typeOfBook = `+printType=${typeOfBook}`;
    }
    if (downloadFormat) {
      downloadFormat = `+download=${downloadFormat}`;
    }

    try {
      const response = await fetch(
        `${baseURL}${searchedTitle}${searchedAuthor}${searchedSubject}${searchedPublisher}${searchedISBN}${typeOfBook}${downloadFormat}&startIndex=${startIndex}&key=${KEY}`
      ).then(resp => resp.json());

      this.setState({ books: response.items });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <Container>
        <Segment>
          <SearchBar onFormSubmit={this.onFormSubmit} />
        </Segment>

        <BookList books={this.state.books} />
      </Container>
    );
  }
}

export default App;
