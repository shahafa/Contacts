import { connect } from 'react-redux';
import { fetchRows } from '../actions/actions.js';
import Grid from '../components/Grid.jsx';

const mapStateToProps = (state) => ({
  rows: state.rows,
  isFetchingRows: state.isFetchingRows
});

const mapDispatchToProps = (dispatch) => ({
  fetchRows: () => {
    dispatch(fetchRows());
  }
});

const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);

export default GridContainer;
