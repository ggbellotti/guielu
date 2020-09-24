import Carousel from "../components/Carousel"
import Comments from "../components/Comments"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import React from "react"
import Works from "../components/PostWork"

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Carousel />
      <Layout>
        <Works />
        <Comments />
      </Layout>
    </>
  )
}

export default HomePage
