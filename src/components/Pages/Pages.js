import React from 'react'
import {PageContainer, WorldDot} from './PagesStyle'
import Header from './Header/Header'
import Body from './Body/Body'


function Pages() {
  return (
    <PageContainer>
      <WorldDot></WorldDot>
      <Header />
      <Body />
    </PageContainer>
  )
}

export default Pages