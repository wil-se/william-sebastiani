import React from "react"
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "gatsby";

export default function MainNavbar() {
    return (
        <Navbar sticky="top" className='d-flex justify-content-center'>
            <Nav className="d-flex justify-content-center">
                <Nav.Link>
                    <Link to="/">HOME</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/posts">POSTS</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/projects">PROJECTS</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/contacts">CONTACTS</Link>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}