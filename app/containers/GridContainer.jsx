import { connect } from 'react-redux';
import { fetchRowsIfNeeded } from '../actions/actions.js';
import Grid from '../components/Grid.jsx';

const mapStateToProps = (state) => ({
  rows: state.rows,
  isFetching: state.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchRowsIfNeeded: () => {
    dispatch(fetchRowsIfNeeded());
  }
});

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default GridContainer;
