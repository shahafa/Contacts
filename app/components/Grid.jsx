import React, { PropTypes } from 'react';

export default class Grid extends React.Component {
  componentDidMount() {
    this.props.fetchRows();
  }

  render() {
    return (
      <h1>'Hello Shahaf!'</h1>
    );
  }
}

Grid.propTypes = {
  fetchRows: PropTypes.func.isRequired
};
