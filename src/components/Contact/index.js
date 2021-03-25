import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "guilherme-luana2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <S.Wrapper>
      <S.Col1>
        <h1>Deixe que nós contamos sua história</h1>
        <p>
          Nos envie seu contato para tirarmos todas as suas dúvidas. Queremos
          que você tenha a melhor experiência fotográfica de sua vida!
        </p>
        <S.Form>
          <S.FormName>
            <S.FormLabel>Seu nome completo</S.FormLabel>
            <S.FormInput placeholder="Digite seu nome completo" />
          </S.FormName>
          <S.FormPhone>
            <S.FormLabel>Telefone para contato</S.FormLabel>
            <S.FormInput
              placeholder="Digite seu telefone com DDD"
              mask="(99) 99999-9999"
              maskPlaceholder={null}
            />
          </S.FormPhone>
          <S.FormSubmit>Enviar</S.FormSubmit>
        </S.Form>
      </S.Col1>
      <S.Col2>
        <Img
          fluid={data.file.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt=""
        />
      </S.Col2>
    </S.Wrapper>
  )
}

export default Contact
