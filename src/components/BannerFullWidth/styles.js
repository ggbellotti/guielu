import Img from "gatsby-image"
import media from "styled-media-query"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  ${media.lessThan("medium")`
    margin-top: 60px;
  `}
`
export const Background = styled(Img)`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 300px;
  z-index: -1;
  position: relative;
  ${media.lessThan("small")`
    height: 200px;
  `}
`
export const Overlay = styled.div`
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.9)
  );
  position: absolute;
  height: 300px;
  width: 50%;
  z-index: 0;
  top: 80px;
  left: 0;
  ${media.lessThan("medium")`
    width: 75%;
    top: 60px;
  `}
  ${media.lessThan("small")`
    width: 100%;
    height: 200px;
    background-image: none;
    background-color: rgba(0, 0, 0, .65);
    );
  `}
`
export const Text = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 45px;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  height: 300px;
  align-items: center;
  ${media.lessThan("medium")`
    top: 60px;
    padding: 0 10px;
  `}
  ${media.lessThan("small")`
    height: 200px;
  `}
`
export const Title = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.2;
  max-width: 375px;
  ${media.lessThan("small")`
    font-size: 28px;
  `}
`
