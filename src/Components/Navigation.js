import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Card, CardBody } from 'reactstrap';
import { NavLink , Link} from 'react-router-dom';
import { render } from '@testing-library/react';


class Navigation extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Nav navbar className="navItems">
                    <Navbar dark sticky="top" expand="lg" variant="light">
                        <div className="container">
                            <NavbarBrand className="navPic1" >
                                <Card>
                                    <CardBody className="navPic2"></CardBody>
                                </Card>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <NavItem>
                                        <Link className="navLink" to="/">Home </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="navLink" to="/about">About</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="navLink" to="/tickets">Tickets</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="navLink" to="/faq">FAQ</Link>
                                        
                                    </NavItem>
                                    <NavItem>
                                        <Link className="navLink" ><i className="fa fa-shopping-cart"> Cart<span> (0)</span></i></Link>
                                    </NavItem>
                                
                            </Collapse>
                        </div>
                    </Navbar>
                </Nav>
            </React.Fragment>
        );
    }
}

export default Navigation;