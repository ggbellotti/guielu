import BannerFullWidth from "../components/BannerFullWidth"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import React from "react"

const ContactPage = () => {
  return (
    <>
      <GlobalStyle />
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
