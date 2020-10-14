import * as S from "./styles"

import PropTypes from "prop-types"
import React from "react"

const Content = ({ slug, background, category, title, date }) => {
  return (
    <S.BlogItem to={slug}>
      <S.BlogBackground fluid={background} />
      <S.BlogOverlay />
      <S.BlogInfos>
        <S.BlogInfosTitle>{title}</S.BlogInfosTitle>
        <S.BlogInfosDetails>
          <S.BlogInfosCategory>{category}</S.BlogInfosCategory>
          <S.BlogInfosSpace>•</S.BlogInfosSpace>
          <S.BlogInfosDate>{date}</S.BlogInfosDate>
        </S.BlogInfosDetails>
      </S.BlogInfos>
    </S.BlogItem>
  )
}

Content.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Content
