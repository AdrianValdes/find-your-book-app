import React from 'react';
import { Pagination } from 'semantic-ui-react';

class PaginationCompact extends React.Component {
  onPageChange = (event, data) => {
    this.props.onFormSubmit(data.activePage * 12);

    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  render() {
    return (
      <Pagination
        boundaryRange={0}
        defaultActivePage={0}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={2}
        totalPages={this.props.totalItems / 12}
        onPageChange={this.onPageChange}
      />
    );
  }
}

export default PaginationCompact;
