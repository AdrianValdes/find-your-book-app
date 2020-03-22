import React from 'react';
import BookDescription from './BookDescription';
import { Image, Segment } from 'semantic-ui-react';
import './BookItem.css';
import './App.css';

class BookItem extends React.Component {
  state = { open: false };
  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    let { imageLinks, publishedDate, authors } = this.props.book.volumeInfo;

    return (
      <Segment raised id="segmentWithImage">
        <Image
          src={imageLinks.smallThumbnail}
          alt=""
          rounded
          style={{
            height: 220,
            width: 150
          }}
        />
        <br />
        <BookDescription book={this.props.book} />
        <span>
          {' '}
          {authors} <br />{' '}
        </span>{' '}
        (published in {publishedDate.substring(0, 4)}) <br />
      </Segment>
    );
  }
}

export default BookItem;
