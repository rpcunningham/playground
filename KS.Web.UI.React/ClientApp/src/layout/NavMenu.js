import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../content/styles/NavMenu.css';
    
export class NavMenu extends Component {
    displayName = NavMenu.name


    render() {
        return (
            <Navbar fluid collapseOnSelect>
                <Navbar.Collapse>
                    <div className="app-name-top">CIB</div>
                    <div className="app-name-bottom">DESKTOP</div>
                    <Nav bsStyle="pills" activeKey={1} >
                        <LinkContainer to={'/'} exact>
                            <NavItem>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/counter'}>
                            <NavItem>Counter</NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/fetchdata'}>
                            <NavItem>Fetch data</NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/biggrid'}>
                            <NavItem>Big Grid</NavItem>
                        </LinkContainer>
                        <NavItem className="nav-link" href="http://localhost:57899/#/profile">Profile</NavItem>
                    </Nav>
                </Navbar.Collapse>    
            </Navbar>
        );
    }
}
