import React from 'react'
import { ImageContainer, ImageBlur } from './ImageValueStyle'
import HeroWoman from "../../../../images/Hero-woman.png"
import Vector from '../../../../images/Vectorbackground-1.png'


function imageValue() {
  return (
      <ImageContainer>
          <img src={ Vector } alt="invisible" style={ {
            position: "absolute",
            left: '20%',
            right: '0%',
            top: '15%',
            bottom: '0%',
            width: "389px",
            height: "459px"
          }} />
          <img src={ HeroWoman } alt="imageWoman" style={ {
            width: "406px",
            height: "594px",
            zIndex: "999",
            position: "absolute",
            left: '45%',
            right: '0%',
            top: '20%',
            bottom: '0%',
          }} />
    </ImageContainer>
  )
}

export default imageValue