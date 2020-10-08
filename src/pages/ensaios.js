import Footer from "../components/Footer"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import React from "react"

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Layout></Layout>
      <Footer />
    </>
  )
}

export default HomePage
