import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Col, Grid, Row } from 'react-bootstrap';
import fetchBreezeData from '../core/utilities/fetchBreezeData';

export class Profile extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      applicationUsers: ''
    };

    fetchBreezeData('ApplicationUser',).then(
      response => { 
          if (response && response.length > 0) {
            this.setState({ applicationUser: response, loading: false });
          }
      }
    );
    

    
  }

  static renderProfileTable(applicationUser) {
    const divStyle = {
      margin: '40px'
    };

    return (
      <form style={divStyle}>
        <FormGroup controlId="myProfileForm">
          <Grid fluid>
            <Row>
              <Col sm={6}>
                <ControlLabel>Full Name</ControlLabel>
                <FormControl disabled type="text" value={applicationUser.FullName} placeholder="Enter text" />
              </Col>
              <Col sm={6}>
                <ControlLabel>Manager</ControlLabel>
                <FormControl disabled type="text" value={applicationUser.FullName} placeholder="Enter text" />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <ControlLabel>EmployeeID</ControlLabel>
                <FormControl disabled type="text" value={applicationUser.FullName} placeholder="Enter text" />
              </Col>
              <Col sm={6}>
                <ControlLabel>LOB</ControlLabel>
                <FormControl disabled type="text" value={applicationUser.FullName} placeholder="Enter text" />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <ControlLabel>Email</ControlLabel>
                <FormControl disabled type="text" value={applicationUser.FullName} placeholder="Enter text" />
              </Col>
              <Col sm={6}>
                <ControlLabel>Officer Title</ControlLabel>
                <FormControl disabled type="text" value={applicationUser.FullName} placeholder="Enter text" />
              </Col>
          </Row> 
          <Row>
              <Col sm={6}>
                <ControlLabel>Job Function</ControlLabel>
                <FormControl disabled type="text" value={applicationUser.FullName} placeholder="Enter text" />
              </Col>
              <Col sm={6}>
                <ControlLabel>Location</ControlLabel>
                <FormControl disabled type="text" value={applicationUser.FullName} placeholder="Enter text" />
              </Col>
          </Row>    
          </Grid>
        </FormGroup>
      </form>   

    );
  }
  

  render() {
    
    let contents = this.state.loading
    ? <p><em>Loading...</em></p>
    : Profile.renderProfileTable(this.state.applicationUsers);

return (
    <div>
        <h1>Retreiving User Profile</h1>
        {contents}
    </div>
);
    
  }
}


