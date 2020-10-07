import HeartSvg from "../../images/heart.svg"
import styled from "styled-components"

export const Wrapper = styled.footer`
  margin: 75px auto 25px auto;
  width: 100%;
  display: flex;
  a {
    font-size: 14px;
    font-weight: 200;
    text-decoration: none;
    text-align: center;
    color: #000;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`
export const HeartIcon = styled.div`
  background-image: url(${HeartSvg});
  background-repeat: no-repeat;
  width: 15px;
  height: 15px;
  margin: 0 3px;
`
