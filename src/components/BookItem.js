import React from 'react';
import PropTypes from 'prop-types';
import BookDescription from './BookDescription';

import './BookItem.css';
import './App.css';

class BookItem extends React.Component {
  state = { open: false };
  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    const {
      imageLinks,
      publishedDate,
      authors,
      title,
      description,
      previewLink
    } = this.props;

    return (
      <div className="divExample" id="segmentWithImage">
        <img src={imageLinks.smallThumbnail} alt="This is a book cover" />
        <br />
        <BookDescription
          title={title}
          description={description}
          previewLink={previewLink}
        />
        <span>
          {' '}
          {authors} <br />{' '}
        </span>{' '}
        (
        {publishedDate
          ? `published in ${publishedDate.substring(0, 4)}`
          : `The published date for this book is not available`}
        ) <br />
      </div>
    );
  }
}

BookItem.propsTypes = {
  imageLinks: PropTypes.shape({ smallThumbnail: PropTypes.string }),
  authors: PropTypes.string,
  publishedDate: PropTypes.string
};

BookItem.defaultProps = {
  imageLinks: 'There is no link',
  authors: 'There is no author for this book'
};
export default BookItem;
