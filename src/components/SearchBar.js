import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class SearchBar extends React.Component {
  state = { searchedTitle: '' };

  onFormSubmit = event => {
    event.preventDefault();

    //Calling the callback form parent component
    this.props.onFormSubmit(this.state.searchedTitle);
  };

  render() {
    return (
      <div className="ui search-bar">
        {/* <form className="ui  form" onSubmit={this.onFormSubmit}>
          <label>Book Search</label>
          <div className="ui  fluid action input">
            <input
              placeholder="Search..."
              type="text"
              onChange={event => {
                this.setState({ searchedTitle: event.target.value });
              }}
              value={this.state.searchedTitle}
            />
            <button className="ui icon button">
              <i aria-hidden="true" class="search icon"></i>
            </button>
          </div>
        </form> */}
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
            <Form.Input label="Author" placeholder="Author" />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="Publisher" placeholder="Publisher" />
            <Form.Input label="Subject" placeholder="Subject" />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label="ISBN" placeholder="ISBN" />
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
