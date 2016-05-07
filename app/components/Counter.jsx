import React, { PropTypes } from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    console.log('Initalizaing...');
  }

  render() {
    const { counterValue, onClick } = this.props;

    return (
      <p>
        Clicked : {counterValue}
        {' '}
        times
        {' '}
        <button onClick={onClick}> + </button>
      </p>
    );
  }
}

Counter.propTypes = {
  counterValue: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
