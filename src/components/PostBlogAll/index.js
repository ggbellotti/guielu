import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import Content from "./content"
import React from "react"

const PostBlogAll = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query BlogList {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
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
              title
              category
              date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
            }
          }
        }
      }
    }
  `)

  const blogList = allMarkdownRemark.edges

  return (
    <S.Container style={{ marginTop: "125px" }}>
      <S.Title>Artigos que vão te interessar</S.Title>
      <S.BlogWrapper>
        {blogList.map(
          ({
            node: {
              id,
              frontmatter: {
                background: {
                  childImageSharp: { fluid },
                },
                title,
                category,
                date,
              },
              fields: { slug },
            },
          }) => (
            <Content
              key={id}
              slug={slug}
              background={fluid}
              title={title}
              category={category}
              date={date}
            />
          )
        )}
      </S.BlogWrapper>
    </S.Container>
  )
}

export default PostBlogAll
