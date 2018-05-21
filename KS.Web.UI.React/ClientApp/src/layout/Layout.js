import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col className="navbar-full" sm={12}>
              <NavMenu />
          </Col>
          <Col className="app-main-body" sm={12}>
              {this.props.children}
          </Col>
          
          <Col className="footer" sm={12}>
          </Col>
        </Row>
      </Grid>
    );
  }
}
