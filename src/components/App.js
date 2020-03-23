import React from 'react';

import SearchForm from './SearchForm';
import BookList from './BookList';

import PaginationCompact from './Pagination';
import './App.css';
import { Segment, Container, Header } from 'semantic-ui-react';

const KEY = 'AIzaSyCpLykouuOz1NzjMuy5fXuxkntk2eHVlCU';
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';

let paginatedTitle;
let paginatedAuthor;
let paginatedPublihser;
let paginatedSubject;
let paginatedISBN;
let paginatedTypeOfBook;
let paginatedDownloadFormat;

class App extends React.Component {
  state = { books: [], totalItems: 0 };

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
      searchedTitle = `intitle:${searchedTitle}`;
    }
    paginatedTitle = searchedTitle;

    if (searchedAuthor) {
      searchedAuthor = `+inauthor:${searchedAuthor}`;
    }
    paginatedAuthor = searchedAuthor;

    if (searchedPublisher) {
      searchedPublisher = `+inpublisher:${searchedPublisher}`;
    }
    paginatedPublihser = searchedPublisher;

    if (searchedSubject) {
      searchedSubject = `+subject:${searchedSubject}`;
    }
    paginatedSubject = searchedSubject;

    if (searchedISBN) {
      searchedISBN = `+isbn:${searchedISBN}`;
    }
    paginatedISBN = searchedISBN;

    if (typeOfBook) {
      typeOfBook = `&printType=${typeOfBook}`;
    }
    paginatedTypeOfBook = typeOfBook;

    if (downloadFormat) {
      downloadFormat = `&download=${downloadFormat}`;
    }
    paginatedDownloadFormat = downloadFormat;

    try {
      let response = await fetch(
        `${baseURL}${searchedTitle}${searchedAuthor}${searchedSubject}${searchedPublisher}${searchedISBN}${typeOfBook}${downloadFormat}&key=${KEY}&startIndex=${0}&maxResults=12`
      ).then(resp => resp.json());

      this.setState({ books: response.items, totalItems: response.totalItems });
    } catch (error) {
      alert(error);
    }
  };

  onPaginationMove = async indexToSearch => {
    try {
      let response = await fetch(
        `${baseURL}${paginatedTitle}${paginatedAuthor}${paginatedSubject}${paginatedPublihser}${paginatedISBN}${paginatedTypeOfBook}${paginatedDownloadFormat}&key=${KEY}&startIndex=${indexToSearch}&maxResults=12`
      ).then(resp => resp.json());

      this.setState({ books: response.items });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div id="externalDIV">
        <Container className="container">
          <Header color="teal" as="h3" block>
            Find your book!
          </Header>
          <Segment className="externalSegment">
            <SearchForm onFormSubmit={this.onFormSubmit} />
          </Segment>
          <BookList books={this.state.books} />

          {this.state.books.length ? (
            <PaginationCompact
              onPaginationMove={this.onPaginationMove}
              totalItems={this.state.totalItems}
            />
          ) : null}
        </Container>
      </div>
    );
  }
}

export default App;
