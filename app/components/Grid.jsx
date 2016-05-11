import React, { PropTypes } from 'react';

export default class Grid extends React.Component {
  componentDidMount() {
    this.props.fetchRowsIfNeeded();
  }

  render() {
    return (
      <h1>'Hello Shahaf!'</h1>
    );
  }
}

Grid.propTypes = {
  fetchRowsIfNeeded: PropTypes.func.isRequired
};
