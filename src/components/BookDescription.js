import React from 'react';
import PropTypes from 'prop-types';
import { Segment, TransitionablePortal } from 'semantic-ui-react';
import './BookItem.css';
import './App.css';

class BookDescription extends React.Component {
  state = { open: false };
  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    const {
      title = 'There is no title available',
      description = 'This book has not a description available',
      previewLink = 'There is not link for this book'
    } = this.props;
    const { open } = this.state;

    return (
      <div id="transitionalPortal">
        <TransitionablePortal
          closeOnTriggerClick
          onOpen={this.handleOpen}
          onClose={this.handleClose}
          openOnTriggerClick
          trigger={
            <button
              content={open ? 'close description' : title}
              negative={open}
            >
              {' '}
              {title}{' '}
            </button>
          }
        >
          <Segment
            style={{
              left: '40%',
              position: 'fixed',
              top: '50%',
              zIndex: 1000
            }}
          >
            <h1>{title}</h1>
            {description} <br />
            <a
              href={previewLink}
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: 'inherit', fontWeight: 'bold' }}
            >
              Go to store
            </a>
          </Segment>
        </TransitionablePortal>
      </div>
    );
  }
}
BookDescription.propsTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  previewLink: PropTypes.string
};
export default BookDescription;
