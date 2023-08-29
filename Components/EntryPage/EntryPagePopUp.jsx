"use client";
import React, { useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../UI/Button/PrimaryButton";
import Image from "next/image";
import CloseIcon from "@/Components/UI/Icons/CloseIcon";
import Link from "next/link";
function EntryPagePopUp({
  firstBtnTitle,
  secondBtnTitle,
  onClose,
  indianLink,
  thaiLink,
}) {
  return (
    <Container>
      <div className="content-wrapper">
        <div className="content">
          <CloseIcon onClick={onClose} />
          <div className="logo-wrapper">
            <Image
              className="logo"
              alt="Greens Logo"
              src="/greenlogo.png"
              fill
            ></Image>
          </div>

          <h2> Choose Cuisine</h2>
          <div className="button-wrapper">
            <AnchorButton background="true" variant="indian" href={indianLink}>
              {firstBtnTitle}
            </AnchorButton>
            <AnchorButton background="true" variant="thai" href={thaiLink}>
              {secondBtnTitle}
            </AnchorButton>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default EntryPagePopUp;
const Container = styled.div`
  display: block;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);

  position: fixed;

  z-index: 50;
  width: 100%;
  height: 100%;
  .content-wrapper {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);

    padding: 32px 24px;
    width: 95%;
    position: absolute;
    transform: translate(-50%, -50%);
    max-width: 600px;
    top: 50%;
    left: 50%;
  }
  .close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
      width: 100%;
    }
    h1 {
      font-weight: 400;
      text-align: center;
    }
    .logo-wrapper {
      width: 100%;
      padding-bottom: 22.7%;
      position: relative;
      margin: 8px 0 16px 0;
    }

    h2 {
      font-weight: 500;
    }
    .button-wrapper {
      margin-top: 16px;
      display: flex;
      gap: 16px;
      width: 100%;
      @media (max-width: 500px) {
        flex-direction: column;
      }
    }
  }
`;

const AnchorButton = styled(Link)`

        width: 100%;
        display: inline-block;
    text-align: center;
    text-decoration: none; 
    letter-spacing: var(--letterSpacing);
    border: ${(props) =>
      props.variant === "indian" ? "var(--primaryRed)" : "var(--green)"}; 
    padding: 10px 25px 10px 25px;
    font-size: 0.9rem;
    outline: none;
    font-family: var(--poppins);
    margin:${(props) => props.margin};

    cursor: pointer;
    background: ${(props) =>
      props.variant === "indian" ? "var(--primaryRed)" : "var(--green)"}; 
    color:white; 
    transition: all 0.3s ease-in-out;
    &:hover{
        background: ${(props) =>
          props.variant === "indian" ? "var(--hoverRed)" : "var(--hoverGreen)"};
        /* color: ${(props) =>
          !props.background ? "white" : "var(--hoverGreen)"}; */
        border: ${(props) =>
          props.variant === "indian" ? "var(--hoverRed)" : "var(--green)"}
        text-decoration: none;
    }
      
`;
