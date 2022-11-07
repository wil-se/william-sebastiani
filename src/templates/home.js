import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = ({
}) => {
  
  return (
    <Layout location={"/"} title={"Home"}>
      <h1>Home</h1> 
    </Layout>
  )
}

export default Home