import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import BackgroundSlider from "gatsby-image-background-slider"
import React from "react"

const Carousel = () => {
  return (
    <S.Wrapper>
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "carousel" } }
              sort: { fields: name, order: ASC }
            ) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 4000, quality: 100) {
                    src
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={6} // how long an image is shown
      >
        <S.CaptionBg>
          <S.Legend>Pré-wedding no Morro Capuava</S.Legend>
        </S.CaptionBg>
        <S.CaptionBg>
          <S.Legend>Ensaio fotográfico no Parque Ibirapuera</S.Legend>
        </S.CaptionBg>
        <S.CaptionBg>
          <S.Legend>Ensaio de gestante no parque Água Branca</S.Legend>
        </S.CaptionBg>
        <S.CaptionBg>
          <S.Legend>Ensaio em casa - São Paulo/SP</S.Legend>
        </S.CaptionBg>
        <S.CaptionBg>
          <S.Legend>Ensaio na Av. Paulista</S.Legend>
        </S.CaptionBg>
      </BackgroundSlider>
    </S.Wrapper>
  )
}

export default Carousel
