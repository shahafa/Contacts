import { connect } from 'react-redux';
import { setSearchQuery, clearRows, fetchRows } from '../actions/actions.js';
import SearchBox from '../components/SearchBox.jsx';

const mapStateToProps = (state) => ({
  searchQuery: state.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
  setSearchQuery: (searchQuery) => {
    dispatch(setSearchQuery(searchQuery));
  },

  reloadRows: () => {
    dispatch(clearRows());
    dispatch(fetchRows());
  }
});

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

export default GridContainer;
