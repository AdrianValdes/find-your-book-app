import React from 'react';

class SearchBarAuthor extends React.Component {
  state = { bookAuthor: '' };

  onAuthorSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="ui search-bar">
        <form className="ui  form" onSubmit={this.onAuthorSubmit}>
          <label>Book Author</label>{' '}
          <div className="ui  fluid action input">
            <input
              type="text"
              placeholder="Search author..."
              onChange={event => {
                this.setState({ bookAuthor: event.target.value });
              }}
              value={this.state.bookAuthor}
            />
            <button class="ui icon button">
              <i aria-hidden="true" class="search icon"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBarAuthor;
