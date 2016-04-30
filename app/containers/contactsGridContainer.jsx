import React from 'react';
import Griddle from 'griddle-react';
import axios from 'axios';

class ContactsGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);

    this.state = {
      results: [],
      currentPage: 0,
      maxPages: 10,
      resultsPerPage: 10
    };
  }

  componentWillMount() {
    this.getExternalMaxPages();
    this.getExternalData(0);
  }

  setPage(index) {
    this.getExternalData(index);
  }

  getExternalMaxPages() {
    const that = this;

    axios.get('/contacts/count/')
      .then((response) => {
        that.setState({ maxPages: Math.ceil(response.data / that.state.resultsPerPage) });
      });
  }

  getExternalData(page) {
    const that = this;

    axios.get(`/contacts/${page}`)
      .then((response) => {
        that.setState({ results: [...that.state.results, ...response.data], currentPage: page });
      });
  }

  render() {
    return (
      <Griddle
        useExternal
        externalMaxPage={this.state.maxPages}
        externalSetPage={this.setPage}
        externalCurrentPage={this.state.currentPage}
        resultsPerPage={this.state.resultsPerPage}
        results={this.state.results}
        enableInfiniteScroll
        externalChangeSort={() => { }}
        externalSetFilter={() => { }}
        externalSetPageSize={() => { }}
        bodyHeight={400}
        useFixedHeader
      />);
  }
}

export default ContactsGridContainer;
