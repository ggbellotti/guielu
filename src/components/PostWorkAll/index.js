import * as S from "../PostWork/styles"

import { graphql, useStaticQuery } from "gatsby"

import Content from "../PostWork/content"
import React from "react"

const PostWorkAll = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query WorksListAll {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/works/" } }
      ) {
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
    <S.Container style={{ marginTop: "125px" }}>
      <S.Title>Últimos ensaios</S.Title>
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
    </S.Container>
  )
}

export default PostWorkAll
