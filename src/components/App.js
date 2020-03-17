import React from 'react';
import SearchBar from './SearchBar';

import BookList from './BookList';
/* import BookDetail from './BookDetail'; */

const KEY = 'AIzaSyCpLykouuOz1NzjMuy5fXuxkntk2eHVlCU';
/* const baseURL =
  'https://www.googleapis.com/books/v1/volumes?q='; */

class App extends React.Component {
  state = { books: [], selectedBook: null };

  onFormSubmit = async (...args) => {
    /* const array1 = args; */

    let [
      title,
      author,
      publisher,
      subject,
      isbn,
      typeOfBooks,
      downloadFormat
    ] = args;

    if (title) {
      title = `+intitle:${title}`;
    }

    if (author) {
      author = `+inauthor:${author}`;
    }
    if (publisher) {
      publisher = `+inpublisher:${publisher}`;
    }
    if (subject) {
      subject = `+subject:${subject}`;
    }
    if (isbn) {
      isbn = `+isbn:${isbn}`;
    }
    if (typeOfBooks) {
      typeOfBooks = `+printType=${typeOfBooks}`;
    }
    if (downloadFormat) {
      downloadFormat = `+download=${downloadFormat}`;
    }
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}${author}${subject}${publisher}${isbn}${typeOfBooks}${downloadFormat}&key=${KEY}`
    ).then(resp => resp.json());

    this.setState({ books: response.items });
  };

  onBookSelect = book => {
    console.log(book);
    this.setState({ selectedBook: book });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segment ">
          <SearchBar onFormSubmit={this.onFormSubmit} />
        </div>
        {/* <BookDetail book={this.state.selectedBook} /> */}
        <BookList onBookSelect={this.onBookSelect} books={this.state.books} />
      </div>
    );
  }
}

export default App;
