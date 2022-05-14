import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

const Contacts = () => {
  const [contact, setContact] = useState("");

  const getContact = async () => {
    return await import(`../contacts/contacts.md`)
          .then(res => fetch(res.default))
          .then(response => response.text())
          .then(r => setContact(r))
  }

  useEffect(()=>{
    getContact();
  })

  return (
    <>
      <Col xs={12}>
        <Row>
          <div className="article-title"><h2>Contatti</h2></div>
          <div className="article-body"><Markdown>{contact}</Markdown></div> 
        </Row>
      </Col>    
    </>
  )
}
  
export default Contacts