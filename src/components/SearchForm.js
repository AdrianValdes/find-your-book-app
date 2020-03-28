import React from 'react';
import './SearchForm.css';
import { Button, Form } from 'semantic-ui-react';

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

  onTitleChange = event => {
    this.props.onFormChange(event.target);
  };

  onFormSubmit = event => {
    event.preventDefault();

    const {
      searchedAuthor,
      searchedPublisher,
      searchedSubject,
      searchedISBN,
      typeOfBook,
      downloadFormat
    } = this.state;

    const newSearchedTitle = this.props.bookInfo.bookTitle;

    //Calling the callback form parent component
    this.props.onFormSubmit({
      searchedTitle: newSearchedTitle,
      searchedAuthor,
      searchedPublisher,
      searchedSubject,
      searchedISBN,
      typeOfBook,
      downloadFormat,
    });
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit} className="externalForm">
        <Form.Group unstackable widths={2}>
          <Form.Input
            id="bookTitle"
            label="Book Title"
            placeholder="Book Title"
            value={this.props.bookInfo['bookTitle']}
            onChange={this.onTitleChange}
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
            fluid
            label="Download Format"
            placeholder="All possible"
            onChange={event => {
              this.setState({ downloadFormat: event.target.value });
            }}
            options={[
              { key: 'a', text: 'All possible', value: '' },
              { key: 'e', text: 'Epub', value: 'epub' },
            ]}
          />
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
          <Button
            id="searchButton"
            color="teal"
            type="submit"
            className="search"
            icon="search"
            labelPosition="right"
            content="Search"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchForm;
