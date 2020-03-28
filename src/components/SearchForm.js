import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
  state = {
    searchedTitle: '',
    searchedAuthor: '',
    searchedPublisher: '',
    searchedSubject: '',
    searchedISBN: '',
    typeOfBook: '',
    downloadFormat: ''
  };

  onFormSubmit = event => {
    event.preventDefault();

    const {
      searchedTitle,
      searchedAuthor,
      searchedPublisher,
      searchedSubject,
      searchedISBN,
      typeOfBook,
      downloadFormat
    } = this.state;

    //Calling the callback form parent component
    this.props.onFormSubmit({
      searchedTitle,
      searchedAuthor,
      searchedPublisher,
      searchedSubject,
      searchedISBN,
      typeOfBook,
      downloadFormat
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="externalForm">
        <label htmlFor="book-title">Book Title</label>
        <input
          name="book-title"
          placeholder="Book Title"
          value={this.state.searchedTitle}
          onChange={event => {
            this.setState({ searchedTitle: event.target.value });
          }}
        />

        <label htmlFor="author">Author</label>
        <input
          name="author"
          placeholder="Author"
          value={this.state.searchedAuthor}
          onChange={event => {
            this.setState({ searchedAuthor: event.target.value });
          }}
        />
        <label htmlFor="publisher">Publisher</label>
        <input
          name="publisher"
          placeholder="Publisher"
          value={this.state.searchedPublisher}
          onChange={event => {
            this.setState({ searchedPublisher: event.target.value });
          }}
        />
        <label htmlFor="subject">Subject</label>
        <input
          label="subject"
          placeholder="Subject"
          value={this.state.searchedSubject}
          onChange={event => {
            this.setState({ searchedSubject: event.target.value });
          }}
        />
        <label htmlFor="isbn">isbn</label>
        <input
          label="isbn"
          placeholder="ISBN"
          value={this.state.searchedISBN}
          onChange={event => {
            this.setState({ searchedISBN: event.target.value });
          }}
        />
        <label htmlFor="download-format">Download Format</label>
        <select
          control="select"
          onChange={event => {
            this.setState({ downloadFormat: event.target.value });
          }}
        >
          <option value="" selected>
            All possible
          </option>
          <option value="epub">epub</option>
        </select>
        <p>Print Type</p>

        <input
          type="radio"
          id="all"
          name="typeOfBook"
          value="all"
          onChange={() => {
            this.setState({ typeOfBook: 'all' });
          }}
        />
        <label htmlFor="all">All</label>
        <br />
        <input
          type="radio"
          id="books"
          name="typeOfBook"
          value="books"
          onChange={() => {
            this.setState({ typeOfBook: 'books' });
          }}
        />
        <label htmlFor="books">Books</label>
        <br />
        <input
          type="radio"
          id="magazines"
          name="typeOfBook"
          value="magazines"
          onChange={() => {
            this.setState({ typeOfBook: 'magazines' });
          }}
        />
        <label htmlFor="magazines">Magazines</label>
        <br />
        <input
          id="searchButton"
          color="teal"
          type="submit"
          className="search"
          labelPosition="right"
          value="Search"
        />
      </form>
    );
  }
}

export default SearchForm;
