import React from 'react';
import {
  Segment,
  TransitionablePortal,
  Button,
  Header
} from 'semantic-ui-react';
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
    } = this.props.book;
    const { open } = this.state;
    return (
      <div id="transitionalPortal">
        <TransitionablePortal
          closeOnTriggerClick
          onOpen={this.handleOpen}
          onClose={this.handleClose}
          openOnTriggerClick
          trigger={
            <Button
              style={{
                backgroundColor: 'teal ',
                color: 'whitesmoke',
                padding: '5px',
                fontStyle: 'Italic'
              }}
              size="mini"
              compact
              content={open ? 'close description' : title}
              negative={open}
            />
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
            <Header>{title}</Header>
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

export default BookDescription;
