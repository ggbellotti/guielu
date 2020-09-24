import media from "styled-media-query"
import styled from "styled-components"

export const Wrapper = styled.header`
  max-height: 530px;
  min-height: 450px;
  height: 100vh;
  width: 100%;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  margin-top: 80px;
  ${media.greaterThan("huge")`
    max-height: 100%;
    height: 75vh;
  `}
  ${media.lessThan("medium")`
    margin-top: 60px;
  `}
`
export const CaptionBg = styled.div`
  background-color: #000;
  display: block;
  position: absolute;
  margin-top: -39px;
  right: 0;
`
export const Legend = styled.h1`
  padding: 10px 20px;
  font-size: 0.75rem;
  color: #fff;
  font-weight: 400;
  margin: 0;
`
