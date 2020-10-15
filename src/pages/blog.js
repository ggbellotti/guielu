import Footer from "../components/Footer"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import PostBlogAll from "../components/PostBlogAll"
import React from "react"
import SEO from "../components/seo"

const BlogPage = () => {
  return (
    <>
      <GlobalStyle />
      <SEO title="Ideias, dicas e muito mais" />
      <Menu />
      <Layout>
        <PostBlogAll />
      </Layout>
      <Footer />
    </>
  )
}

export default BlogPage
