import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Card = (props) => (
  <Modal show={props.showCard} onHide={props.closeCard}>
    <Modal.Body closeButton>
      <div><pre>{JSON.stringify(props.cardDetails, null, 2)}</pre></div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.closeCard}>Close</Button>
    </Modal.Footer>
  </Modal>
);

Card.propTypes = {
  cardDetails: React.PropTypes.object,
  showCard: React.PropTypes.bool,
  closeCard: React.PropTypes.func.isRequired
};

export default Card;
