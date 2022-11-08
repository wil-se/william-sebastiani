import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Col } from "react-bootstrap";

const Contacts = ({
}) => {
  
  return (
    <Layout location={"/contacts"} title={"Contacts"}>
      <Row>
        <Col xs={12} className="text-center">
          <h1 className="mt-0">EMAIL:</h1>
          <h4>william@sebastiani.finance</h4>
        </Col>
        <Col xs={12} className="text-center mt-2">
          <h1>TELEGRAM:</h1>
          <h4>@klepshydra</h4>
        </Col>
        <Col xs={12} className="text-center mt-2">
          <h1>DISCORD:</h1>
          <h4>Klepshydra#1474</h4>
        </Col>
      </Row>
    </Layout>
  )
}

export default Contacts