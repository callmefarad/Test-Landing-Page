import React from 'react'
import {HeaderContainer, Logo, AllLink, AllNav,Product,Company,Developers,Pricing,Help,Text,Icon,Login,CreateAccount} from './HeaderStyles'
import PensionLogo from "../../../images/PensionCentralLogo_-01 1.png"
import { MdExpandMore } from "react-icons/md";



function HeaderStyles() {
  return (
      <HeaderContainer>
          <Logo>
        <img src={ PensionLogo } alt="pension"
          style={ {
            width: "109px",
            height: "47px"
          } } />
          </Logo>
          <AllLink>
            <Product>
              <Text>product</Text>
              <Icon>
                <MdExpandMore style={{
                  color: "#16AF6D"
                }} />
              </Icon>
            </Product>
            <Company>
              <Text>company</Text>
              <Icon>
                <MdExpandMore style={{
                  color: "#16AF6D"
                }} />
              </Icon>
            </Company>
            <Developers>developer</Developers>
            <Pricing>pricing</Pricing>
            <Help>
              <Text>help</Text>
              <Icon>
                <MdExpandMore style={{
                  color: "#16AF6D"
                }} />
              </Icon>
            </Help>
          </AllLink>
          <AllNav>
            <Login>login</Login>
            <CreateAccount>create account</CreateAccount>
          </AllNav>
    </HeaderContainer>
  )
}

export default HeaderStyles