import * as S from "./styles"

import React, { useState } from "react"

import Content from "./content"

const Burger = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>

      <Content open={open} />
    </>
  )
}
export default Burger
