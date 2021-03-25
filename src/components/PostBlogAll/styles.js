import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const Title = styled.h1``
export const BlogWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
  `}
`
export const BlogBackground = styled(Img)`
  width: 100%;
  height: 100%;
  position: absolute !important;
  z-index: -1;
  display: flex;
  transition: all 0.125s ease-in;
`
export const BlogOverlay = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.9)
  );
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
  transition: all 0.125s ease-in;
`
export const BlogInfosDetails = styled.div`
  display: flex;
  align-items: center;
`
export const BlogInfos = styled.div`
  padding: 15px;
  z-index: 1;
  transition: all 0.125s ease-in;
`
export const BlogInfosSpace = styled.span`
  color: #fff;
  margin: 0 5px;
`
export const BlogInfosCategory = styled.p`
  color: #fff;
  font-size: 14px;
  padding: 0;
  font-weight: 200;
`
export const BlogInfosTitle = styled.h2`
  color: #fff;
  font-size: 32px;
  padding: 0;
  margin: 0 0 10px 0;
  line-height: 1.15;
  font-weight: 400;
`
export const BlogInfosDate = styled.p`
  color: #fff;
  font-size: 14px;
  padding: 0;
  font-weight: 200;
`
export const BlogItem = styled(AniLink)`
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  position: relative;
  height: 500px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  transition: all 0.125s ease-in;
  &:hover {
    ${BlogBackground} {
      transform: scale(1.1);
    }
    ${BlogOverlay} {
      height: 100%;
    }
    ${BlogInfos} {
      padding-bottom: 25px;
    }
  }
`
