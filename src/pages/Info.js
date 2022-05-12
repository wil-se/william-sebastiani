import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";

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
        <div className="article-title"><h2>Background</h2></div>
        <div className="article-body">
          {info}
        </div>
      </Col>
      </>
    )
  }
  
  export default Info