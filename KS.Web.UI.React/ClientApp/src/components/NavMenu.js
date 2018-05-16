import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

class newNav extends Nav { 

    handleClick(e) {
        if (this.props.disabled) {
            e.preventDefault();
        } else {
            if (this.props.onSelect) {
                this.props.onSelect(this.props.eventKey, e);
            }
        }
    }

}    

export class NavMenu extends Component {
    displayName = NavMenu.name
    onSelect(eventKey, e) {
        //e.preventDefault();
        console.log('onSelect');
    }

    handleKeyDown(e) {
        if (this.props.disabled) {
            e.preventDefault();
        } else {
            if (this.props.onSelect) {
                this.props.onSelect(this.props.eventKey, e);
            }
        }
    }

    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>KS.Web.UI.React</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="pills" stacked activeKey={1} >
                        <LinkContainer to={'/'} exact>
                            <NavItem eventKey={1}>
                                <Glyphicon glyph='home' /> Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/counter'}>
                            <NavItem eventKey={2}>
                                <Glyphicon glyph='education' /> Counter</NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/fetchdata'}>
                            <NavItem eventKey={3}>
                                <Glyphicon glyph='th-list' /> Fetch data</NavItem>
                        </LinkContainer>
                        <NavItem eventKey={4} className="nav-link" href="http://localhost:57899/#/fixedincomeblotter/63f51fa3-9aaa-e711-9c3d-acfdcee59c40"><Glyphicon glyph='th-list' /> Fixed Income Blotter</NavItem>
                    </Nav>
                </Navbar.Collapse>    
            </Navbar>
        );
    }
}
