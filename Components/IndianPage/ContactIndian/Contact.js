'use client'
import React, { useContext } from 'react'
import FormSection from './FormSection/FormSection'
import styled from 'styled-components'
function Contact({ contactInfoData }) {

    return (
        <Container>
            <Flex className="row-container">
                <IFrameStyle src={contactInfoData.acf.google_map_url} style={{ border: '0' }} loading="lazy"></IFrameStyle>
                <FormSection
                    formName={contactInfoData.acf.contact_form_name}
                    emailTo={contactInfoData.acf.booking_form_email} />
            </Flex>

        </Container>
    )
}
const Container = styled.section`
`
const Flex = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items : center ;
justify-content: center;
`
const IFrameStyle = styled.iframe`
padding: 100px 0;
display: block;
width: 100%;
height: 700px;
min-width: auto;

`
export default Contact
