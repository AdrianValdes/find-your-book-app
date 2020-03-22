import React from 'react';
import { Pagination } from 'semantic-ui-react';

class PaginationCompact extends React.Component {
  state = { intervalId: 0 };

  /* componentDidMount(){
    this.setState({intervalId: })
  } */

  onPageChange = (event, data) => {
    this.props.onPaginationMove(data.activePage * 12);

    window.scrollTo({ top: 400, behavior: 'smooth' });
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
          siblingRange={2}
          totalPages={this.props.totalItems / 12}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default PaginationCompact;
