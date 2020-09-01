import { Link } from "gatsby"
// import media from "styled-media-query"
import styled from "styled-components"

export const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
`
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
`
export const Logo = styled(Link)`
  display: block;
  svg {
    width: 80px;
  }
`
// export const LinksMenu = styled.ul`

// `
// export const ListLink = styled.li`
//   margin-right: 60px;
//   .active {
//     &::after {
//       opacity: 1;
//     }
//   }
//   &:last-of-type {
//     margin-right: 0;
//   }
// `
// export const Links = styled(Link)`
//   color: #000;
//   text-decoration: none;
//   transition: var(--transition-default);
//   &::after {
//     content: "";
//     height: 2px;
//     background-color: var(--color-secondary);
//     display: block;
//     margin-left: -1px;
//     margin-right: -2px;
//     opacity: 0;
//   }
//   &:hover {
//     color: var(--color-secondary);
//   }
// `
