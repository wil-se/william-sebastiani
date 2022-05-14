import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";


const Home = () => {
    return (
      <>
       <Col xs={12}>
        <Row>
        <div className="article-title"><h2>Home</h2></div>
          <div className="article-body">HOME</div> 
        </Row>
      </Col> 
      </>
    )
  }
  
export default Home