import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const BannerFullWidth = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "003.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <S.Container>
      <S.Background fluid={data.file.childImageSharp.fluid} alt="" />
      <S.Overlay />
      <S.Text>
        <S.Title>
          A sua história é importante. Deixe ela registrada para todos saberem.
        </S.Title>
      </S.Text>
    </S.Container>
  )
}

export default BannerFullWidth
