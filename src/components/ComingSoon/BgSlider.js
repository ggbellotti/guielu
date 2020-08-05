import { graphql, useStaticQuery } from "gatsby"

import BackgroundSlider from "gatsby-image-background-slider"
import React from "react"

const BgSlider = () => {
  const query = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `)
  return (
    <BackgroundSlider
      initDelay={3}
      transition={3}
      duration={10}
      query={query}
    />
  )
}
export default BgSlider
