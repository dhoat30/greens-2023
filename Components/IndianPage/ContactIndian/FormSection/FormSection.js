import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../../UI/Titles/SectionTitle'
import Form from './Form/Form'

function FormSection({ emailTo, formName }) {


    return (
        <Container>

            <h1 className='section-title-indian title-border'>Contact Us</h1>
            <Form
                formName={formName}
                emailTo={emailTo}></Form>
        </Container>

    )
}

const Container = styled.div`
    background: #FFF8F6;
    padding: 100px 20px;
    position: relative;
    width: 100%;
    min-width: 600px;
    margin-bottom: 100px;
    input{ 
        color: var(--onSurface);
        border-bottom: var(--onSurface) 1px solid;
        &::placeholder{
            color: var(--onSurface);
        } 
    }
    textarea{ 
       border: 1px solid var(--onSurface);
       color: var(--onSurface);

       &::placeholder{
            color: var(--onSurface);
        } 
    }
`
const PatternContainer = styled.div`
position: absolute;
@media (max-width: 900px){
    display: none;
}
`

export default FormSection