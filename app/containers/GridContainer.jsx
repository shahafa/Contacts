import { connect } from 'react-redux';
import { fetchRows, openCard } from '../actions/actions.js';
import Grid from '../components/Grid.jsx';

const mapStateToProps = (state) => ({
  rows: state.rows,
  isFetchingRows: state.isFetchingRows,
  searchQuery: state.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
  fetchRows: () => {
    dispatch(fetchRows());
  },

  openCard: (cardDetails) => {
    dispatch(openCard(cardDetails));
  }
});

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default GridContainer;
