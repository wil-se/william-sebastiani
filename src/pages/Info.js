import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import ProfilePic from '../assets/img/william-sebastiani.jpg'

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
            <div className="text-center" style={{marginBottom: 10}}><img src={ProfilePic} style={{height: 256, width: 256}}/></div>
            <Markdown>{info}</Markdown>
          </div>
        </Row>
      </Col>
      </>
    )
  }
  
  export default Info