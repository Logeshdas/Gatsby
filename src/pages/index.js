import React from "react"
import Layout from "../components/layout"
import { Link,graphql } from "gatsby";
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
export default ({data}) => {
  console.log("data",data)
  return (
  <Layout>
    <div>
     <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
     </div>
   {data.allMarkdownRemark.edges.map(({node})=>(

   
<div key={node.id}>
<Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `
}
            >
<h3
  css={css`
    margin-bottom: ${rhythm(1 / 4)};
  `}
>
  {node.frontmatter.title}{" "}
  <span
    css={css`
      color: #bbb;
    `}
  >
    — {node.frontmatter.date}
  </span>
</h3>
<p>{node.excerpt}</p>
</Link>
</div>
    ))}
  </Layout>
)
}
export const query =graphql`
{
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
      frontmatter{
        title
        date
      }
      fields {
        slug
      }
        excerpt
        timeToRead
        html
      }
    }
  }
}
`