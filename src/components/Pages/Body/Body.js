import React from 'react'
import { BodyContainer } from "./BodyStyle"
import TextValue from './TextValue/TextValue'
import ImageValue from './ImageValue/imageValue'

function Body() {
  return (
    <BodyContainer>
      <TextValue />
      <ImageValue />
    </BodyContainer>
  )
}

export default Body