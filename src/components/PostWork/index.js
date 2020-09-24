import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import Content from "./content"
import React from "react"

const Works = props => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query WorksList {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              background {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              description
              title
            }
          }
        }
      }
    }
  `)

  const worksList = allMarkdownRemark.edges

  return (
    <S.Container>
      <S.Title>{props.title || "Últimos ensaios"}</S.Title>
      <S.WorkWrapper>
        {worksList.map(
          ({
            node: {
              id,
              frontmatter: {
                background: {
                  childImageSharp: { fluid },
                },
                title,
                description,
              },
              fields: { slug },
            },
          }) => (
            <Content
              key={id}
              slug={slug}
              background={fluid}
              title={title}
              description={description}
            />
          )
        )}
      </S.WorkWrapper>
      <S.ButtonMore to="/ensaios">Ver mais ensaios</S.ButtonMore>
    </S.Container>
  )
}

export default Works
