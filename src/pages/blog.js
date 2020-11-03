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
      <SEO
        title="Ideias, dicas e muito mais"
        description="Temos algumas dicas e ideias para sua sessão fotográfica, não deixe de ler nosso conteúdo!"
      />
      <Menu />
      <Layout>
        <PostBlogAll />
      </Layout>
      <Footer />
    </>
  )
}

export default BlogPage
