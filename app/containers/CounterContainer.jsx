import { connect } from 'react-redux';
import { incrementCounter } from '../actions/actions.js';
import Counter from '../components/Counter.jsx';

const mapStateToProps = (state) => ({
  counterValue: state.counterValue
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(incrementCounter());
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
