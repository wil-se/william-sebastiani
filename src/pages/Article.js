import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import { useParams } from 'react-router-dom';
import ArticlesIndex from '../articles/index.json'
import { Col } from 'react-bootstrap';
import '../styles/Article.css'

const Article = (content) => {
    const params = useParams();
    const [postContent, setArticlecontent] = useState("")
    const [title, setTile] = useState("");

    const getArticle = async () => {
        return await import(`../articles/${params.dir}/article.md`)
            .then(res => fetch(res.default))
            .then(response => response.text())
            .then(r => setArticlecontent(r))
    }

    const getTitle = async () => {
        return await import(`../articles/${params.dir}/title.md`)
            .then(res => fetch(res.default))
            .then(response => response.text())
            .then(r => setTile(r))
    }

    useEffect(()=>{
        getArticle();
        getTitle();
    })

  return (
      <>
    <Col xs={12} className="article-title"><Markdown>{title}</Markdown></Col>
    <Col xs={12} className="article-body"><Markdown>{postContent}</Markdown></Col>
    </>
)
}

export default Article