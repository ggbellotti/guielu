import BannerFullWidth from "../components/BannerFullWidth"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import React from "react"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <>
      <GlobalStyle />
      <SEO
        title="Registre sua história, deixe fotografado"
        description="Não deixe de registrar o momento de sua vida. A fotografia nos proporciona momentos emocionantes."
      />
      <Menu />
      <BannerFullWidth />
      <Layout>
        <Contact />
      </Layout>
      <Footer />
    </>
  )
}

export default ContactPage
