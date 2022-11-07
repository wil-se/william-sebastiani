import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = ({
}) => {
  
  return (
    <Layout location={"/projects"} title={"Projects"}>
      <h1>Projects</h1> 
    </Layout>
  )
}

export default Projects