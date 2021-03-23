import Carousel from "../components/Carousel"
import Comments from "../components/Comments"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import React from "react"
import SEO from "../components/seo"
import Works from "../components/PostWork"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <SEO title="Ensaios e casamentos em São Paulo" />
      <Menu />
      <Carousel />
      <Layout>
        <Works />
        <Comments />
        <Contact />
      </Layout>
      <Footer />
    </>
  )
}

export default IndexPage
