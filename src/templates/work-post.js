import * as S from "../components/Works/styles"

import BackButton from "../components/BackButton"
import Footer from "../components/Footer"
import GlobalStyle from "../styles/global"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const WorkPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          background={post.frontmatter.background.childImageSharp.fixed.src}
        />
        <S.Content>
          <S.HeaderWork>
            <S.DateWork>{post.frontmatter.date}</S.DateWork>
            <S.TitleWork>{post.frontmatter.title}</S.TitleWork>
            <S.DescriptionWork>
              {post.frontmatter.description}
            </S.DescriptionWork>
          </S.HeaderWork>
          <S.MainWork>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </S.MainWork>
        </S.Content>
        <BackButton to="/blog" />
      </Layout>
      <Footer />
    </>
  )
}
export const query = graphql`
  query Work($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY ")
        background {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
      html
    }
  }
`
export default WorkPost
