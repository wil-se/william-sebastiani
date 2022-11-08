import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/postCard";
import { Row, Col } from "react-bootstrap";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        {/* <Bio /> */}
        <p>
          No blog posts found.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      {/* <Bio /> */}
      <Row className="d-flex justify-content-center">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          console.log(post.frontmatter);
          return (
            <Col xs={12} lg={8}>
              <Link to={`/posts${post.fields.slug}`} itemProp="url">
                <PostCard date={post.frontmatter.date} title={title} category={post.frontmatter.category} excerpt={post.frontmatter.description || post.excerpt} />
              </Link>
            </Col>
          )
        })}
      </Row>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {type: {eq: "article"}}}
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
          type
        }
      }
    }
  }  
`
