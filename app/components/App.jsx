import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchBoxContainer from '../containers/SearchBoxContainer.jsx';
import GridContainer from '../containers/GridContainer.jsx';
import CardContainer from '../containers/CardContainer.jsx';

const searchBoxColStyle = {
  padding: 0
};

const gridColStyle = {
  paddingTop: '15px',
  paddingRight: '15px',
  paddingBottom: '15px',
  paddingLeft: '0px'
};

const topsColStyle = {
  padding: '15px'
};

const App = () => (
  <div>
    <Grid fluid>
      <Row className="show-grid">
        <Col xs={12} style={searchBoxColStyle}>
          <SearchBoxContainer />
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={2} style={topsColStyle}>
          <div></div>
        </Col>
        <Col xs={10} style={gridColStyle}>
          <GridContainer />
        </Col>
      </Row>
    </Grid>
    <CardContainer />
  </div>
);

export default App;
