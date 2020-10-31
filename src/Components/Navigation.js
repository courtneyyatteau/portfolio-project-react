import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';


class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="xl" variant="light">
                    <div className="container">
                        <NavbarBrand className="mr-auto navPic" href="/"><img src="/assets/images/logo.png" height="80" width="80" alt="Food Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="navItems">
                                <NavItem>
                                    <NavLink className="navLink" to="/">Home </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navLink" to="/about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navLink" to="/tickets">Tickets</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="navLink" to="/faq">FAQ</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        </React.Fragment>
        );
    }
}

export default Navigation;