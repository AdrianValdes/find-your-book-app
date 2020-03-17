import React from 'react';
import SearchBar from './SearchBar';

import BookList from './BookList';

const KEY = 'AIzaSyCpLykouuOz1NzjMuy5fXuxkntk2eHVlCU';
/* const exampleURL =
  'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key='; */

class App extends React.Component {
  state = { books: [] };

  onFormSubmit = async (title, author) => {
    console.log(author);
    console.log(title);
    let responseFinal;
    if (author && title) {
      try {
        let response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${KEY}`
        ).then(resp => resp.json());

        responseFinal = response;
      } catch (error) {
        console.log(error);
      }
    }

    if (title && !author) {
      let response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${KEY}`
      )
        .then(resp => resp.json())
        .catch(error => {
          console.log(error);
        });

      responseFinal = response;
    }

    if (author && !title) {
      let response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${author}&key=${KEY}`
      )
        .then(resp => resp.json())
        .catch(error => {
          console.log(error);
        });

      responseFinal = response;
    }

    this.setState({ books: responseFinal.items });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segment ">
          <SearchBar onFormSubmit={this.onFormSubmit} />
        </div>
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
