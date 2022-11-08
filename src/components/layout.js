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
        <Row className="header d-flex justify-content-center pt-5 pb-4 mx-0">
          <Col xs={6} md={2}>
            <StaticImage alt="" src="../images/logo-white.png" />
          </Col>
          <Col xs={12} className="text-center mt-4">
            <h1 className="logoname"><b>WILLIAM SEBASTIANI</b></h1>
          </Col>
        </Row>
      </Link>
      <MainNavbar />
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={10} xl={10}>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
      <footer className="text-center mt-5">
        © {new Date().getFullYear()}, William Sebastiani
      </footer>
    </Container>
  )
}

export default Layout
