import React, { PropTypes } from 'react';
import Infinite from 'react-infinite';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  elementInfiniteLoad() {
    return (
      <div className="infinite-list-item">
        Loading...
      </div>
    );
  }

  handleInfiniteLoad() {
    this.props.fetchRows();
  }

  renderMessages() {
    return this.props.rows.map((row) => <div key={row.idNumber} style={{ height: 20 }}>{row.firstName}</div>);
  }

  render() {
    return (
      <div>
        <Infinite
          elementHeight={20}
          containerHeight={300}
          infiniteLoadBeginEdgeOffset={20}
          onInfiniteLoad={this.handleInfiniteLoad}
          loadingSpinnerDelegate={this.elementInfiniteLoad()}
          isInfiniteLoading={this.props.isFetchingRows}
        >
          {this.renderMessages()}
        </Infinite>
      </div>
    );
  }
}

Grid.propTypes = {
  rows: React.PropTypes.array,
  isFetchingRows: React.PropTypes.bool,
  fetchRows: PropTypes.func.isRequired
};
