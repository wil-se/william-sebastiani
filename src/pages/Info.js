import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import ProfilePic from '../assets/img/william-nobg.png'

const Info = (props) => {
    const [info, setInfo] = useState("");

    const getInfo = async () => {
      return await import(`../info/info.md`)
            .then(res => fetch(res.default))
            .then(response => response.text())
            .then(r => setInfo(r))
    }

    useEffect(()=>{
      getInfo();
    })

    return (
      <>
      <Col xs={12}>
        <Row>
          <div className="article-title"><h2>Chi sono</h2></div>
          <div className="article-body">
            <Markdown>{info}</Markdown>
          </div>
        </Row>
      </Col>
      </>
    )
  }
  
  export default Info