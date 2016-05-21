import React, { PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import Waypoint from 'react-waypoint';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.loadMoreRows = this.loadMoreRows.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
  }

  onRowClick(key) {
    const contact = this.props.rows.find((obj) => obj._id === key);
    this.props.openCard(contact);
  }

  loadMoreRows() {
    this.props.fetchRows();
  }

  renderRows() {
    return this.props.rows.map((row) => <tr key={row._id} onClick={() => this.onRowClick(row._id)}>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.idNumber}</td>
    </tr>);
  }

  renderLoadingIndicator() {
    if (this.props.isFetchingRows) {
      return <p>Loading...</p>;
    }

    return '';
  }

  render() {
    const style = {
      width: '100%',
      paddingRight: 15,
      paddingLeft: 15,
      paddingTop: 5,
      background: '#fff',
      border: '1px solid #f2f2f2'
    };

    return (
      <div style={style}>
        <Table hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>ID Number</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </Table>

        <Waypoint onEnter={this.loadMoreRows} threshold={0} /> {this.renderLoadingIndicator()}
      </div>
    );
  }
}

Grid.propTypes = {
  rows: React.PropTypes.array,
  isFetchingRows: React.PropTypes.bool,
  searchQuery: React.PropTypes.string,
  fetchRows: PropTypes.func.isRequired,
  openCard: PropTypes.func.isRequired
};
