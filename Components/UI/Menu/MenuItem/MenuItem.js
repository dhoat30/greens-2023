import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
function MenuItem(props) {
    const clickHandler = (e) => {
        props.closeClick()
    }
    return (
        <li>
            {props.anchorTag ?
                <AnchorStyle onClick={clickHandler} href={props.menuSlug}>{props.label}</AnchorStyle> :
                <Link href={props.menuSlug} passHref legacyBehavior><LinkStyle onClick={clickHandler} activestyle={activestyle}>{props.children}</LinkStyle></Link>
            }
        </li>
    )
}
const activestyle = {
    color: 'var(--darkGreen)'
}
const AnchorStyle = styled.a`
color: var(--green); 
    margin: 0 20px; 
    &:hover {
        color: var(--lightGreen);
    }
   @media (max-width:1000px){
       padding: 10px 5px;
       display: block;
    
   }
`
const LinkStyle = styled.a`
    text-decoration: none;
color: var(--green); 
    margin: 0 20px; 
  
    &:hover {
        color: var(--darkGreen);
    }
   @media (max-width:1000px){
       padding: 10px 5px;
       display: block;
    
   }
`
export default MenuItem
