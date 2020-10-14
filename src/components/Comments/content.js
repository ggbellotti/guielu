import * as S from "./styles"

import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"
import React from "react"

const Contents = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query CommentList {
      allMarkdownRemark(
        filter: { frontmatter: { comment: { eq: "yes" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            frontmatter {
              comments
              name
              date(formatString: "MMM/YYYY", locale: "pt-BR")
              imageComment {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const worksList = allMarkdownRemark.edges
  return (
    <>
      {worksList.map(
        ({
          node: {
            id,
            frontmatter: {
              imageComment: {
                childImageSharp: { fluid },
              },
              comments,
              name,
              date,
            },
            fields: { slug },
          },
        }) => (
          <S.ItemComment className="keen-slider__slide" key={id}>
            <S.PhotoItemComment>
              <Img fluid={fluid} />
            </S.PhotoItemComment>
            <S.InfosItemComment>
              <S.NameItemComment>{name}</S.NameItemComment>
              <S.DateItemComment>{date}</S.DateItemComment>
              <S.TextItemComment>“{comments}”</S.TextItemComment>
              <S.LinkItemComment to={slug}>Ver ensaio</S.LinkItemComment>
            </S.InfosItemComment>
          </S.ItemComment>
        )
      )}
    </>
  )
}

export default Contents
