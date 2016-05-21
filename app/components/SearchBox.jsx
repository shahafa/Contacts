import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    this.onSearchButtonKeyUp = this.onSearchButtonKeyUp.bind(this);
    this.search = this.search.bind(this);
  }

  onSearchButtonClick() {
    this.search();
  }

  onSearchButtonKeyUp(e) {
    if (e.keyCode === 13) {
      this.search();
    }
  }

  search() {
    if (this.textBox !== null) {
      const textBoxValue = ReactDOM.findDOMNode(this.refs.textBox).value;
      this.props.setSearchQuery(textBoxValue);
      this.props.reloadRows();
    }
  }

  render() {
    const style = {
      margin: 0,
      padding: 15,
      width: '100%',
      height: 60,
      backgroundColor: '#FFF',
      boxShadow: '0 1px 0 0 rgba(0,0,0,.05),0 2px 4px 0 rgba(0,0,0,.06)'
    };

    const textBoxStyle = {
      height: '30px',
      fontFamily: ['Helvetica', 'FontAwesome', 'sans-serif']
    };

    const searchButtonStyle = {
      hover: { outline: 0 }
    };

    return (
      <Grid style={style}>
        <Row className="show-grid">
          <Col xs={10} xsOffset={1}>

            <InputGroup>
              <FormControl type="text" style={textBoxStyle} placeholder="&#xf002;  Search..." ref="textBox" onKeyUp={this.onSearchButtonKeyUp} />
              <InputGroup.Button>
                <Button bsStyle="primary" bsSize="small" style={searchButtonStyle} onClick={this.onSearchButtonClick}><i className="fa fa-search fa-lg"></i></Button>
              </InputGroup.Button>
            </InputGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

SearchBox.propTypes = {
  searchQuery: React.PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
  reloadRows: PropTypes.func.isRequired
};
