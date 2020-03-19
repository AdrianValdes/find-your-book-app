import React from 'react';
import { Button, Form, Icon } from 'semantic-ui-react';

class SearchBar extends React.Component {
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
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group unstackable widths={2}>
          <Form.Input
            label="Book Title"
            placeholder="Book Title"
            value={this.state.searchedTitle}
            onChange={event => {
              this.setState({ searchedTitle: event.target.value });
            }}
          />
          <Form.Input
            label="Author"
            placeholder="Author"
            value={this.state.searchedAuthor}
            onChange={event => {
              this.setState({ searchedAuthor: event.target.value });
            }}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="Publisher"
            placeholder="Publisher"
            value={this.state.searchedPublisher}
            onChange={event => {
              this.setState({ searchedPublisher: event.target.value });
            }}
          />
          <Form.Input
            label="Subject"
            placeholder="Subject"
            value={this.state.searchedSubject}
            onChange={event => {
              this.setState({ searchedSubject: event.target.value });
            }}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            label="ISBN"
            placeholder="ISBN"
            value={this.state.searchedISBN}
            onChange={event => {
              this.setState({ searchedISBN: event.target.value });
            }}
          />
          <Form.Select
            label="Download Format"
            control="select"
            onChange={event => {
              this.setState({ downloadFormat: event.target.value });
            }}
          >
            <option value=" " disable selected>
              All possible
            </option>
            <option value="epub">epub</option>
            <option value="pdf">pdf</option>
          </Form.Select>
        </Form.Group>
        <Form.Group grouped>
          <label>Print Type</label>
          <Form.Field
            defaultChecked
            label="All"
            control="input"
            type="radio"
            name="htmlRadios"
            onChange={() => {
              this.setState({ typeOfBook: 'all' });
            }}
          />
          <Form.Field
            label="Books"
            control="input"
            type="radio"
            name="htmlRadios"
            onChange={() => {
              this.setState({ typeOfBook: 'books' });
            }}
          />
          <Form.Field
            label="Magazines"
            control="input"
            type="radio"
            name="htmlRadios"
            onChange={() => {
              this.setState({ typeOfBook: 'magazines' });
            }}
          />
        </Form.Group>
        <Button
          positive
          type="submit"
          className="search"
          icon
          labelPosition="right"
        >
          Search
          <Icon name="search" />
        </Button>
      </Form>
    );
  }
}

export default SearchBar;
