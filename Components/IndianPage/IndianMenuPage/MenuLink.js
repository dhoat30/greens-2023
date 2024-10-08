import React from 'react'
import AnchorLink from '../UI/AnchorLink/AnchorLink'
import Logo from '../UI/Logo/Logo'
import styled from 'styled-components'


function MenuLink(props) {
    return (
        <React.Fragment >
            <TakeAwayMenuContainer>
                {/* <FontAwesomeIconStyle onClick={props.closeClick} icon={faTimes} /> */}
                <Logo width="200px " mobileWidth="200px" />
                <LinkContainer>
                    <AnchorLink margin="0 5px" targetblank={true} link={props.takeawayLink}>{props.takeAwayTitle}</AnchorLink>
                    <AnchorLink margin="0 5px" targetblank={true} background={true} link={props.dineInLink}>{props.dineInTitle}</AnchorLink>
                </LinkContainer>
            </TakeAwayMenuContainer>
        </React.Fragment>

    )
}

const TakeAwayMenuContainer = styled.div`
width: 95%;
max-width: 500px;
position: fixed;
z-index: 30;
background: white;
padding: 50px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

`

const LinkContainer = styled.div`
margin: 20px 0 0 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
height: 110px ;
`
export default MenuLink
