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
        <Card className="mx-3 mb-5 magic-box">
            <Card.Header className="text-center">
              <h2 className="title"><b>{title}</b></h2>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xs={12}>
                    <h4>{category}</h4>
                </Col>
                <Col xs={12}>
                    {excerpt}
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
            {date}  
            </Card.Footer>
          </Card>
    )
}

export default PostCard;