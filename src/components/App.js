import React from 'react';

import SearchForm from './SearchForm';
import BookList from './BookList';

import PaginationCompact from './Pagination';
import './App.css';
import { Segment, Container, Header } from 'semantic-ui-react';

const KEY = 'AIzaSyCpLykouuOz1NzjMuy5fXuxkntk2eHVlCU';
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';

class App extends React.Component {
  state = {
    books: [],
    totalItems: 0,
    bookInfo: {
      bookTitle: '',
      author: '',
      publisher: '',
      subject: '',
      isbn: '',
      typeOfBook: '',
      downloadFormat: '',
    },
  };

  onFormChange = (target) => {
    let bookInfo = { ...this.state.bookInfo };
    bookInfo[target.id] = target.value;
    this.setState({ bookInfo });
  };

  onFormSubmit = async (indexToSearch) => {
    let searchedTitle = this.state.bookInfo.bookTitle;
    let searchedAuthor = this.state.bookInfo.author;
    let searchedPublisher = this.state.bookInfo.publisher;
    let searchedSubject = this.state.bookInfo.subject;
    let searchedISBN = this.state.bookInfo.isbn;
    let searchedTypeOfBook = this.state.bookInfo.typeOfBook;

    if (searchedTitle) {
      searchedTitle = `intitle:${searchedTitle}`;
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

    if (searchedTypeOfBook) {
      searchedTypeOfBook = `&printType=${searchedTypeOfBook}`;
    }

    /* if (downloadFormat) {
      downloadFormat = `&download=${downloadFormat}`;
    }
    paginatedDownloadFormat = downloadFormat; */
    if (typeof indexToSearch !== 'number') {
      indexToSearch = 0;
    }

    try {
      let response = await fetch(
        `${baseURL}${searchedTitle}${searchedAuthor}${searchedSubject}${searchedPublisher}${searchedISBN}${searchedTypeOfBook}&key=${KEY}&startIndex=${indexToSearch}&maxResults=12`
      ).then((resp) => resp.json());

      this.setState({ books: response.items, totalItems: response.totalItems });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <Container className="container">
        <Header color="teal" as="h3" block>
          Find your book!
        </Header>
        <Segment className="externalSegment">
          <SearchForm
            onFormSubmit={this.onFormSubmit}
            bookInfo={this.state.bookInfo}
            onFormChange={this.onFormChange}
          />
        </Segment>
        <BookList books={this.state.books} />

        {this.state.books.length === 0 ? (
          ''
        ) : (
          <PaginationCompact
            onFormSubmit={this.onFormSubmit}
            totalItems={this.state.totalItems}
          />
        )}
      </Container>
    );
  }
}

export default App;
