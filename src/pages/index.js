import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Products from "../components/products"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <div className="socialBar">1</div>
      <Products />
    </div>
  </Layout>
)

export default IndexPage
