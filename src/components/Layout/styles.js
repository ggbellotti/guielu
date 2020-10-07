import media from "styled-media-query"
import styled from "styled-components"

export const Wrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 45px;
  ${media.lessThan("medium")`
    padding: 0 15px;
  `}
`
