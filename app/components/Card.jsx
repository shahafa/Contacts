import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class Card extends React.Component {
  render() {
    return (
      <Modal show={this.props.showCard} onHide={this.props.closeCard}>
        <Modal.Body closeButton>
          <div><pre>{JSON.stringify(this.props.cardDetails, null, 2)}</pre></div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeCard}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

Card.propTypes = {
  cardDetails: React.PropTypes.object,
  showCard: React.PropTypes.bool,
  closeCard: React.PropTypes.func.isRequired
};
