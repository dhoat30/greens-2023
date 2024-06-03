import React, { useState, useContext } from 'react'
import Menu from '../../UI/Menu/Menu'
import styled from 'styled-components'
import HamburgerIcon from '../../UI/Icons/HamburgerIcon'
import CloseIcon from '../../UI/Icons/CloseIcon'
import LoadingContext from '../../../store/loading-context'
import Overlay from '@/Components/UI/Overlay/Overlay'

function Navbar(props) {

  const [mobileMenuShow, setMobileMenuShow] = useState(false)
  const [hamburgerIconShow, setHamburgerIconShow] = useState(true)

  const loadingCtx = useContext(LoadingContext)
  const clickHandler = (event) => {
    setMobileMenuShow(true)
    setHamburgerIconShow(false)
    loadingCtx.getOverlay(true)
  }

  const closeClickHandler = () => {
    setMobileMenuShow(false)
    setHamburgerIconShow(true)
    loadingCtx.getOverlay(false)
  }

  const Icon = hamburgerIconShow ? <HamburgerIconStyle onClick={clickHandler} /> : <CloseIconStyle onClick={closeClickHandler} />;
  return (
    <React.Fragment>
      <DesktopContainer>

        <Menu flexrow="true"
          menuArray={props.firstMenuArray}
          home={false}
          closeClick={closeClickHandler}
        />
      </DesktopContainer>

      <MobileContainer>
        <Overlay />
        {Icon}
        {mobileMenuShow ? <Menu
          closeClick={closeClickHandler}
          orderOnline={props.orderOnline}
          mobilemenu={true}
          flexrow={false}
          menuArray={props.firstMenuArray}
          home={false} /> : null}
      </MobileContainer>
    </React.Fragment>

  )
}

const DesktopContainer = styled.div`
 width: 100%;
  @media(max-width: 1000px){
    display: none;
  }
`

const MobileContainer = styled.div`
display: none;

@media(max-width: 1000px){
  display: block;
}
`

const HamburgerIconStyle = styled(HamburgerIcon)`
width: 35px; 
color: var(--green);


path { 
  fill: var(--green);
}
`
const CloseIconStyle = styled(CloseIcon)`
width: 25px !important; 
 
color: var(--green);
/* position: absolute; */
top: 20px;
left: 20px;
path { 
  fill: var(--green);
}
`
export default Navbar
