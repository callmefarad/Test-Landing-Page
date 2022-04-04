import React, {useState} from 'react'
import {HeaderContainer, Logo, AllLink, AllNav,Product,Company,Developers,Pricing,Help,Text,Icon,Login,CreateAccount,Drop,ProductList,AllContainer, CompanyList, CompanyDrop, HelpDrop, HelpList} from './HeaderStyles'
import PensionLogo from "../../../images/PensionCentralLogo_-01 1.png"
import { MdExpandMore } from "react-icons/md";



function HeaderStyles () {
  const [ selected, setSelected ] = useState( "" )
  const [ showProduct, setShowProduct ] = useState( false )
  const [ showCompany, setShowCompany ] = useState( false )
  const [ showHelp, setShowHelp ] = useState( false )
  
  const productOptions = ['product1', 'product2', 'product3']
  const companyOptions = ['company1', 'company2']
  const helpOptions = ['poor transaction', 'investment', 'savings']
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
            <AllContainer>
              <Product onMouseEnter={(e)=>setShowProduct(!showProduct)}>
              <Text>product</Text>
              <Icon>
                <MdExpandMore style={{
                  color: "#16AF6D"
                }} 
              />
              </Icon>
              </Product>
            {showProduct && (
              <Drop onMouseLeave={ () => setShowProduct( false ) }>
                {productOptions.map((option)=>(
                  <ProductList onClick={ ( e ) => {
                    setSelected( option )
                    setShowProduct( false )
                  }}>
                    {option}
                  </ProductList>
                ))}
              </Drop>
            )}
            </AllContainer>
            <AllContainer>
              <Company onMouseEnter={(e)=>setShowCompany(!showCompany)}>
              <Text>company</Text>
              <Icon>
                <MdExpandMore style={{
                  color: "#16AF6D"
                }} 
              />
              </Icon>
              </Company>
            {showCompany && (
              <CompanyDrop onMouseLeave={ () => setShowCompany( false ) }>
                {companyOptions.map((option)=>(
                  <CompanyList onClick={ ( e ) => {
                    setSelected( option )
                    setShowCompany( false )
                  }}>
                    {option}
                  </CompanyList>
                ))}
              </CompanyDrop>
            )}
            </AllContainer>
            <Developers>developer</Developers>
            <Pricing>pricing</Pricing>
            <AllContainer>
              <Help 
              onMouseEnter={(e)=>{setShowHelp(!showHelp)}}
              >
              <Text>company</Text>
              <Icon>
                <MdExpandMore style={{
                  color: "#16AF6D"
                }} 
              />
              </Icon>
              </Help>
            {showHelp && (
              <HelpDrop onMouseLeave={ () => setShowHelp( false ) }>
                {helpOptions.map((option)=>(
                  <HelpList
                    onClick={ ( e ) => {
                    setSelected( option )
                    setShowHelp( false )
                    } }
                  >
                    {option}
                  </HelpList>
                ))}
              </HelpDrop>
            )}
            </AllContainer>
          </AllLink>
          <AllNav>
            <Login>login</Login>
            <CreateAccount>create account</CreateAccount>
          </AllNav>
    </HeaderContainer>
  )
}

export default HeaderStyles