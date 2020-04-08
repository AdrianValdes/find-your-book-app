import React from 'react';
import './SearchForm.css';
import { Button, Form } from 'semantic-ui-react';

class SearchForm extends React.Component {
  state = {
    downloadFormat: '',
  };

  onAnyInputChange = (event) => {
    this.props.onFormChange(event.target);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    const { downloadFormat } = this.state;

    this.props.onFormSubmit({
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
            value={this.props.bookInfo.bookTitle}
            onChange={this.onAnyInputChange}
          />
          <Form.Input
            id="author"
            label="Author"
            placeholder="Author"
            value={this.props.bookInfo.author}
            onChange={this.onAnyInputChange}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            id="publisher"
            label="Publisher"
            placeholder="Publisher"
            value={this.props.bookInfo.publisher}
            onChange={this.onAnyInputChange}
          />
          <Form.Input
            id="subject"
            label="Subject"
            placeholder="Subject"
            value={this.props.bookInfo.subject}
            onChange={this.onAnyInputChange}
          />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input
            id="isbn"
            label="ISBN"
            placeholder="ISBN"
            value={this.props.bookInfo.isbn}
            onChange={this.onAnyInputChange}
          />
          <Form.Select
            fluid
            id="downloadFormat"
            label="Download Format"
            placeholder="All possible"
            onChange={(event) => {
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
            id="typeOfBook"
            value=""
            onChange={this.onAnyInputChange}
          />
          <Form.Field
            label="Books"
            control="input"
            type="radio"
            name="htmlRadios"
            id="typeOfBook"
            value="books"
            onChange={this.onAnyInputChange}
          />
          <Form.Field
            label="Magazines"
            control="input"
            type="radio"
            name="htmlRadios"
            id="typeOfBook"
            value="magazines"
            onChange={this.onAnyInputChange}
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
