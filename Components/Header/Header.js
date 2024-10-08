"use client"
import React, { useContext } from 'react'
import Logo from '../UI/Logo/Logo'
import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import Link from 'next/link'
import ContactInfoContext from '../../store/contact-info-context'
import AnchorLink from '../UI/AnchorLink/AnchorLink'
import { usePathname } from 'next/navigation'
import ChangeLocation from './ChangeLocation/ChangeLocation'

// menu array


function Header({ contactData }) {
  const pathname = usePathname()
  const searchTerm = pathname;
  const [location, cuisine] = searchTerm.split('/').slice(1); // Extract "paihia" and "thai"
  const currentLocation = `${cuisine} ${location}`;

  const filteredItems = contactData.map(item => {
    if (item.slug.includes(location) && item.slug.includes(cuisine)) {
      return {
        url: `/${location}/${cuisine}`,
        orderOnlineLink: item.acf.order_online_link,
        logo: item.acf.logo
      }
    }
  });

  let urlData = filteredItems.filter(item => item !== undefined)


  const menuArray = [
    {
      id: 121545,
      url: `${urlData[0].url}`,
      title: "Home"
    },
    {
      id: 121546,
      url: `${urlData[0].url}/menu`,
      title: "Menu"
    },
    {
      id: 121547,
      url: `${urlData[0].url}/gallery`,
      title: "Gallery"
    },
    {
      id: 121548,
      url: `${urlData[0].url}/about`,
      title: "About"
    },
    {
      id: 121549,
      url: `${urlData[0].url}/contact`,
      title: "Contact"
    },
    {
      id: 1215410,
      url: urlData[0].orderOnlineLink,
      title: "Order Online"
    },
  ]

  const firstPartMenu = menuArray.slice(0, 3).map(data => {
    return {
      id: data.id,
      url: data.url,
      label: data.title
    }
  })
  const secondPartMenu = menuArray.slice(3, 6).map(data => {
    return {
      id: data.id,
      url: data.url,
      label: data.title
    }
  })
  const mobileMenuArrayData = menuArray.map(data => {
    return {
      id: data.id,
      url: data.url,
      label: data.title
    }
  })
  return (
    <>
      <ChangeLocation variant="thai" currentLocation={currentLocation} />
      <Container className='header'>
        <DesktopNavbar className="row-container">
          <Navbar firstMenuArray={firstPartMenu} />
          <Link href={menuArray[0].url} passHref legacyBehavior>
            <LinkStyle><Logo logoData={urlData[0].logo} header={true} contwidth="150px" /></LinkStyle>
          </Link>
          <Navbar firstMenuArray={secondPartMenu} />
        </DesktopNavbar>

        <MobileNavbar className="row-container">

          <Navbar firstMenuArray={mobileMenuArrayData} />
          <Link href={menuArray[0].url} passHref legacyBehavior>
            <LinkStyle><Logo logoData={urlData[0].logo} header={true} contwidth="100px" /></LinkStyle>
          </Link>
        </MobileNavbar>
      </Container>
    </>

  )
}

const Container = styled.div`
    background: var(--lightGreen);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media(max-width: 1000px){
        
    }
`
const AnchorLinkStyle = styled(AnchorLink)`
@media(max-width: 1000px){
    display: none;
}
`
const LinkStyle = styled.a`
margin: 0 30px;
@media (max-width: 1000px){
   margin: 0;

 }
`
const DesktopNavbar = styled.div`
@media (min-width : 1000px){ 
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
}
display: none;
`

const MobileNavbar = styled.div`
display: none;

 @media (max-width: 1000px){
  
   display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center !important;
width: 100%;
z-index: 120;

 }

`
export default Header
