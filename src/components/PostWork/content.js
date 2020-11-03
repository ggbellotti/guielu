import * as S from "./styles"

import PropTypes from "prop-types"
import React from "react"

const Content = ({ background, slug, title, description }) => {
  return (
    <S.WorkItem fade duration={0.25} to={slug}>
      <S.WorkBackground fluid={background} />
      <S.WorkInfos>
        <S.WorkInfosTitle>{title}</S.WorkInfosTitle>
        <S.WorkInfosDescription>{description}</S.WorkInfosDescription>
      </S.WorkInfos>
    </S.WorkItem>
  )
}

Content.propTypes = {
  background: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Content
