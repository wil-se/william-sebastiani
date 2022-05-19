import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import { Row, Col } from "react-bootstrap"
import cover from '../assets/img/cover.jpeg'
import '../styles/Post.css'
import { useParams, useNavigate } from 'react-router-dom';


const ArticlePreview = (props) => {
    const navigate = useNavigate();
    return (
        <Col xs={12} onClick={() => navigate(`/articolo/${props.dir}/${props.name}`)} className="article-preview text-center mt-2 mb-2 pt-2 pb-1">
            <Markdown>
                {props.content}
            </Markdown>
        </Col>
  )
}

export default ArticlePreview;