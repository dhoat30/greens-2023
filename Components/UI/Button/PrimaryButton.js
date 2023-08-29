"use client";

import React from 'react'
import styled from 'styled-components'
function PrimaryButton({ children, className, onClick, background, variant }) {

    return (
        <Button
            onClick={onClick}
            background={background}
            variant={variant}
            className={className}>
            {children}
        </Button>
    )
}

export default PrimaryButton
const Button = styled.button`
  display: inline-block;
    text-align: center;
    text-decoration: none; 
    letter-spacing: var(--letterSpacing);
    border: ${props => props.variant === "indian" ? "var(--primaryRed)" : "var(--green)"}; 
    padding: 10px 25px 10px 25px;
    font-size: 0.9rem;
    outline: none;
    font-family: var(--poppins);
    margin:${props => props.margin};
   
    cursor: pointer;
    background: ${props => props.variant === "indian" ? "var(--primaryRed)" : "var(--green)"}; 
    color: ${props => props.background ? "white" : "var(--green)"};
    transition: all 0.3s ease-in-out;
    &:hover{
        background: ${props => props.variant === "indian" ? "var(--hoverRed)" : "var(--hoverGreen)"};
        /* color: ${props => !props.background ? "white" : "var(--hoverGreen)"}; */
        border: ${props => props.variant === "indian" ? "var(--hoverRed)" : "var(--green)"}
        text-decoration: none;
`
