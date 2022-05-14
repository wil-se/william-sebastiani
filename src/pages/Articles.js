import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import { Row, Col } from "react-bootstrap"
import cover from '../assets/img/cover.jpeg'
import '../styles/Post.css'
import ArticlePreview from '../components/ArticlePreview'
import ArticlesIndex from '../articles/index.json'


const Articles = () => {
    const [postContent, setPostcontent] = useState([])

    const getFiles = async () => {
      let files = [];
      for(let dir=0; dir<2; dir++) {
        await import(`../articles/${dir}/title.md`)
          .then(res => fetch(res.default)
          .then(response => response.text())
          .then(response => {
            files.push(<ArticlePreview dir={dir} key={dir} content={response} name={ArticlesIndex[0][dir]}/>)
          })
          .catch(err => console.log(err)))
      }
      return files;
    }

    useEffect(() => {
      getFiles().then(files => setPostcontent(files));
    }, [])

  return (
    <>
     <Col xs={12}>
        <Row>
          <div className="article-title"><h2>Articoli</h2></div>
          <div className="article-preview-body">{postContent}</div> 
        </Row>
      </Col>
    </>
  )
}

export default Articles