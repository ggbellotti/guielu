import InputMask from "react-input-mask"
import media from "styled-media-query"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  margin: 40px 0;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
  h1 {
    margin: 0 0 15px 0;
  }
  p {
    font-size: 16px;
    font-weight: 200;
    margin-bottom: 30px;
  }
`
export const Col1 = styled.div`
  width: 35%;
  margin: 0 50px 0 0;
  ${media.lessThan("large")`
    width: 65%;
  `}
  ${media.lessThan("medium")`
    width: 100%;
    margin: 0;
  `}
`
export const Col2 = styled.div`
  width: 65%;
  margin: 0 0 0 50px;
  ${media.lessThan("medium")`
    display: none;
  `}
  .gatsby-image-wrapper {
    height: 45vh;
    /* img {
      @media (max-width: 1025px) {
        object-position: -240px center !important;
      }
    } */
  }
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormName = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`
export const FormPhone = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`
export const FormInput = styled(InputMask)`
  font-size: 14px;
  color: #666666;
  padding: 10px;
  border: 1px solid #000;
  background-color: #fcfcfc;
  &::placeholder {
    opacity: 0.6;
  }
`
export const FormSubmit = styled.button`
  border: none;
  background-color: var(--color-secondary);
  color: #fff;
  font-size: 16px;
  padding: 8px 23px;
  cursor: pointer;
  margin-top: 30px;
  width: fit-content;
  transition: var(--transition-default);
  &:hover {
    background-color: var(--color-tertiary);
  }
`
