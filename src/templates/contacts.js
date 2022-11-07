import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contacts = ({
}) => {
  
  return (
    <Layout location={"/contacts"} title={"Contacts"}>
      <h1>Contacts</h1> 
    </Layout>
  )
}

export default Contacts