import "keen-slider/keen-slider.min.css"

import * as S from "./styles"

import Content from "./content"
import React from "react"
import { useKeenSlider } from "keen-slider/react"

const Comments = () => {
  const slidesPerView = 2 //only numbers

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: slidesPerView,
    initial: 0,
    spacing: 20,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    breakpoints: {
      "(max-width: 1170px)": {
        slidesPerView: slidesPerView - 1,
      },
    },
  })

  return (
    <S.Container>
      <S.Title>Comentários de nossos clientes</S.Title>
      <S.WrapperComment ref={sliderRef} className="keen-slider">
        <Content />
      </S.WrapperComment>
      {slider && (
        <S.Dots>
          {[...Array(slider.details().size - slidesPerView + 2).keys()].map(
            idx => {
              return (
                <S.Dot
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  className={currentSlide === idx ? " active" : ""}
                />
              )
            }
          )}
        </S.Dots>
      )}
    </S.Container>
  )
}

export default Comments
