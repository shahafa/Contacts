import { connect } from 'react-redux';
import { closeCard } from '../actions/actions.js';
import Card from '../components/Card.jsx';

const mapStateToProps = (state) => ({
  cardDetails: state.cardDetails,
  showCard: state.showCard
});

const mapDispatchToProps = (dispatch) => ({
  closeCard: () => {
    dispatch(closeCard());
  }
});

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
