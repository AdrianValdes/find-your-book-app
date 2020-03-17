import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class SearchBar extends React.Component {
  state = {
    searchedTitle: '',
    searchedAuthor: '',
    searchedPublisher: '',
    searchedSubject: '',
    searchedISBN: ''
  };

  onFormSubmit = event => {
    event.preventDefault();
    //Calling the callback form parent component

    this.props.onFormSubmit(
      this.state.searchedTitle,
      this.state.searchedAuthor,
      this.state.searchedPublisher,
      this.state.searchedSubject,
      this.state.searchedISBN
    );
  };

  /* onAuthorSubmit = event => {
    event.preventDefault();
    if (this.state.searchedAuthor) {
      this.props.onFormSubmit(this.state.searchedAuthor);
    }
  }; */
  render() {
    return (
      <div>
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
            <Form.Field label="Donwload Format" control="select">
              <option value="EPUB">EPUB</option>
              <option value="PDF">PDF</option>
            </Form.Field>
          </Form.Group>
          <Form.Group grouped>
            <label>Print Type</label>
            <Form.Field
              label="All"
              control="input"
              type="radio"
              name="htmlRadios"
            />
            <Form.Field
              label="Books"
              control="input"
              type="radio"
              name="htmlRadios"
            />
            <Form.Field
              label="Magazines"
              control="input"
              type="radio"
              name="htmlRadios"
            />
          </Form.Group>
          <Button type="submit" className="search">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
