import Footer from "../components/Footer"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import NotFound from "../components/NotFound"
import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <SEO title="Ensaios em São Paulo" description="" />
    <Menu />
    <Layout>
      <NotFound />
    </Layout>
    <Footer />
  </>
)

export default NotFoundPage
