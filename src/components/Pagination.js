import React from 'react';
import { Pagination } from 'semantic-ui-react';

class PaginationCompact extends React.Component {
  onPageChange = (event, data) => {
    this.props.onPaginationMove(data.activePage * 10);
  };

  render() {
    return (
      <div>
        <Pagination
          boundaryRange={0}
          defaultActivePage={0}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={5}
          totalPages={this.props.totalItems}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default PaginationCompact;
