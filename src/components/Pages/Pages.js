import React from 'react'
import {PageContainer, WorldDot} from './PagesStyle'
import Header from './Header/Header'


function Pages() {
  return (
    <PageContainer>
      <WorldDot></WorldDot>
      <Header />
    </PageContainer>
  )
}

export default Pages