import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Card, Row, Col } from "react-bootstrap"

const Home = ({
}) => {
  
  return (
    <Layout location={"/"} title={"Home"}>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header className="text-center">
              <h2><b>Ciao hola hello</b></h2>
            </Card.Header>
            <Card.Body>
              Uno due tre quattro cinque sei sette otto nove dieci unidici
            </Card.Body>
            <Card.Footer>
              Ciaciacia
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default Home