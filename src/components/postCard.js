import React from "react"
import { Link } from "gatsby";
import { Card, Row, Col } from "react-bootstrap"

const PostCard = ({category, excerpt, title, date}) => {
console.log("EEEE")
console.log(category)    
console.log(excerpt)
console.log(date)   
console.log(title) 
    return (
        <Card>
            <Card.Header className="text-center">
              <h2><b>{title}</b></h2>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                    {category}
                </Col>
                <Col>
                    {excerpt}
                </Col>
                <Col>
                    {date}
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              Ciaciacia
            </Card.Footer>
          </Card>
    )
}

export default PostCard;