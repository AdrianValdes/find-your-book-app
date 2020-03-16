import React from 'react';
import SearchBar from './SearchBar';

const KEY = 'AIzaSyCpLykouuOz1NzjMuy5fXuxkntk2eHVlCU';
/* const exampleURL =
  'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key='; */

class App extends React.Component {
  onFormSubmit = term => {};

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
