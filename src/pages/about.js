import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
export default ({data}) => (
    <Layout>
  <div style={{ color: `black` }}>
      <Header/>
     { console.log("data===>",data)}
    <h1>About {data.site.siteMetadata.title} </h1>
    <p>Such wow. Very React.</p>
  </div>
  </Layout>
)


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`