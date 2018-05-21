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
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>CWB React</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="pills" activeKey={1} >
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <Glyphicon glyph='home' /> Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/counter'}>
                            <NavItem>
                                <Glyphicon glyph='education' /> Counter</NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/fetchdata'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Fetch data</NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/biggrid'}>
                            <NavItem>
                                <Glyphicon glyph='th-list' /> Big Grid</NavItem>
                        </LinkContainer>
                        <NavItem className="nav-link" href="http://localhost:57899/#/profile"><Glyphicon glyph='th-list' /> Fixed Income Blotter</NavItem>
                    </Nav>
                </Navbar.Collapse>    
            </Navbar>
        );
    }
}
