import React from 'react';
import PropTypes from 'prop-types';
import BookDescription from './BookDescription';
import { Image, Segment } from 'semantic-ui-react';
import './BookItem.css';
import './App.css';

class BookItem extends React.Component {
  state = { open: false };
  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    const { imageLinks, publishedDate, authors } = this.props.book;
    console.log(this.props.book);
    return (
      <Segment raised id="segmentWithImage">
        <Image
          src={
            imageLinks.smallThumbnail ||
            'https://react.semantic-ui.com/images/wireframe/image.png'
          }
          alt="This is a book cover"
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
        (
        {publishedDate
          ? `published in ${publishedDate.substring(0, 4)}`
          : `The published date for this book is not available`}
        ) <br />
      </Segment>
    );
  }
}

BookItem.propsTypes = {
  book: PropTypes.shape({
    imageLinks: PropTypes.string,
    authors: PropTypes.string,
    publishedDate: PropTypes.string
  })
};

BookItem.defaultProps = {
  book: {
    imageLinks: 'There is no link',
    authors: 'There is no author for this book'
  }
};
export default BookItem;
