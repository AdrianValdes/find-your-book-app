import React from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';

const KEY = 'AIzaSyCpLykouuOz1NzjMuy5fXuxkntk2eHVlCU';
/* const exampleURL =
  'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key='; */

class App extends React.Component {
  state = { books: [] };
  onFormSubmit = async term => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${KEY}`
    ).then(resp => resp.json());

    console.log(response.items);

    this.setState({ books: response.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
