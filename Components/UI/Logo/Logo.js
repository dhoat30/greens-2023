import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import styled from 'styled-components'


function Logo({ className, logoData, contWidth }) {


    return (
        <Container className={className} contWidth={contWidth}>
            <ImageStyle
                src={logoData.url}
                fill
                alt="Greens Logo"
            />

        </Container>
    )
}

export default Logo

const Container = styled.div`
    position: relative; 
    width: 150px; 
    padding-bottom: 35%; 
   
`
const ImageStyle = styled(Image)`
object-fit: cover;
margin: 0 auto 0 0;

display: block ;
`