import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.handleInfiniteLoad = this.handleInfiniteLoad.bind(this);
  }

  handleInfiniteLoad() {
    this.props.fetchRows();
  }

  renderRows() {
    return this.props.rows.map((row) => <div key={row._id} style={{ height: 20 }}>{row.firstName}</div>);
  }

  render() {
    return (
      <div>
        {this.renderRows()}
        <Waypoint
          onEnter={this.handleInfiniteLoad}
          threshold={0}
        />
      </div>
    );
  }
}

Grid.propTypes = {
  rows: React.PropTypes.array,
  isFetchingRows: React.PropTypes.bool,
  searchQuery: React.PropTypes.string,
  fetchRows: PropTypes.func.isRequired
};
