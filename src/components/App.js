import React from 'react';
import SearchBar from './SearchBar';

import BookList from './BookList';

const KEY = 'AIzaSyCpLykouuOz1NzjMuy5fXuxkntk2eHVlCU';
/* const baseURL =
  'https://www.googleapis.com/books/v1/volumes?q='; */

class App extends React.Component {
  state = { books: [], selectedBook: null };

  onFormSubmit = async (...args) => {
    console.log(args);
    /* const array1 = args; */

    let [title, author, publisher, subject, isbn] = args;

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

    console.log(title);
    console.log(author);
    console.log(publisher);
    console.log(subject);
    console.log(isbn);

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}${author}${subject}${publisher}${isbn}&key=${KEY}`
    ).then(resp => resp.json());

    this.setState({ books: response.items });
  };

  onBookSelect = book => {
    console.log('From the App!', book);
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segment ">
          <SearchBar onFormSubmit={this.onFormSubmit} />
        </div>
        <BookList onBookSelect={this.onBookSelect} books={this.state.books} />
      </div>
    );
  }
}

export default App;
