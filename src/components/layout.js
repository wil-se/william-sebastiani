import * as React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo-white.png";
import { Container, Row, Col } from "react-bootstrap";
import MainNavbar from "./navbar";
import { Navbar, Nav } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <Container style={{ maxWidth: '100%' }} className="px-0">
      <Link to="/" alt="logo">
        <Row className="d-flex justify-content-center my-4 mx-0">
          <Col xs={6} md={2}>
            <StaticImage alt="" src="../images/logo-white.png" />
          </Col>
          <Col xs={12} className="text-center mt-4">
            <h1><b>William Sebastiani</b></h1>
          </Col>
        </Row>
      </Link>
      <MainNavbar />
      <Container className="mt-5">
        <main>{children}</main>
      </Container>
      <footer className="text-center">
        © {new Date().getFullYear()}, William Sebastiani
      </footer>
    </Container>
  )
}

export default Layout
