import React, { PropTypes } from 'react';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
  }

  onSearchButtonClick() {
    if (this.textBox !== null) {
      this.props.setSearchQuery(this.textBox.value);
      this.props.reloadRows();
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." ref={(ref) => { this.textBox = ref; }}></input>
        <button type="button" onClick={this.onSearchButtonClick}>Search</button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  searchQuery: React.PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
  reloadRows: PropTypes.func.isRequired
};
