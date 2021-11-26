import React from 'react';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/surlogo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
/* --------------------------------------------
 -----Showing Header component------------
 ---------------------------------------------*/

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Navbar  variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                <Navbar.Brand href="home"><img
        src={logo}
        width="200"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/schedule#schedule">Schedule</Nav.Link>
                <Nav.Link as={HashLink} to="/experience#experience">Experience</Nav.Link>
                {user.email && <span style={{ color: 'rgb(255, 217, 91)' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button className="btnlog" onClick={logOut}>log out</button>
                        :
                        <Nav.Link as={HashLink} to="/login#login">Login</Nav.Link>}
                        </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;