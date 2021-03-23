import * as S from "./styles"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"

function NotFound() {
  return (
    <S.Container>
      <h1>Página não encontrada</h1>
      <p>Desculpe, mas não encontramos o que você está procurando :S</p>
      <p>
        Mas fique tranquilo,{" "}
        <AniLink
          cover
          direction="up"
          top="entry"
          duration={0.6}
          bg="#ffffff"
          activeClassName="active"
          to="/"
          title="Inicio"
        >
          clique aqui para voltar
        </AniLink>
        .
      </p>
    </S.Container>
  )
}

export default NotFound
