import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import OneTile from "./oneTile"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      allPlakatyYaml {
        edges {
          node {
            id
            name
            cena
          }
        }
      }
    }
  `)

  return (
    <div className="products-main">
      {data.allPlakatyYaml.edges.map(({ node }) => (
        <OneTile key={node.id} name={node.name} url="" />
      ))}
    </div>
  )
}
export default Products
