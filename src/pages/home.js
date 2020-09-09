import Carousel from "../components/Carousel"
import GlobalStyle from "../styles/global"
import Menu from "../components/Menu"
import React from "react"
import Works from "../components/PostWork"

const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Carousel />
      <Works />
    </>
  )
}

export default HomePage
