import Footer from "../components/Footer"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import PostBlogAll from "../components/PostBlogAll"
import React from "react"

const BlogPage = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Layout>
        <PostBlogAll />
      </Layout>
      <Footer />
    </>
  )
}

export default BlogPage
