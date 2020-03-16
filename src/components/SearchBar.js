import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onFormSubmit = event => {
    event.preventDefault();

    //Calling the callback form parent component
    this.props.onFormSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui inverted segment">
        <form className="ui inverted form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Book Search</label>
            <input
              type="text"
              onChange={event => {
                this.setState({ searchTerm: event.target.value });
              }}
              value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
