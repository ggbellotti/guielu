import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const Title = styled.h1``
export const WrapperComment = styled.div`
  margin-bottom: 20px;
`
export const ItemComment = styled.div`
  display: flex;
  align-items: flex-start;
  height: auto;
  min-height: 250px;
  background-color: #f3f3f3;
  overflow: auto;
`
export const PhotoItemComment = styled.div`
  width: 100%;
  min-width: 160px;
  max-width: 200px;
  height: 100%;
  .gatsby-image-wrapper {
    height: inherit;
  }
  img {
    object-fit: cover;
    object-position: center;
    width: inherit;
    height: inherit;
  }
`
export const InfosItemComment = styled.div`
  margin: 20px 30px;
`
export const NameItemComment = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`
export const TextItemComment = styled.p`
  font-size: 18px;
  font-weight: 200;
  line-height: 1.2;
  margin-bottom: 20px;
`
export const DateItemComment = styled.p`
  font-size: 12px;
  font-weight: 200;
`

export const Dot = styled.button`
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.active {
    background: #000;
  }
`
export const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
`
export const ArrowSvg = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
`
export const ArrowLeftSvg = styled.svg`
  left: 5px;
`
export const ArrowRightSvg = styled.svg`
  left: auto;
  right: 5px;
`
