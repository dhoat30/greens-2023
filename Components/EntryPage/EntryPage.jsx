"use client";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../UI/Button/PrimaryButton";
import EntryPagePopUp from "./EntryPagePopUp";
import { useRouter } from "next/navigation";

function EntryPage() {
  const router = useRouter();
  const [firstBtnClicked, setFirstBtnClicked] = useState(false);
  const [secondBtnClicked, setSecondBtnClicked] = useState(false);
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const handlePopUpClosed = () => {
    setPopUpVisible(false);
    setFirstBtnClicked(false);
    setSecondBtnClicked(false);
  };

  const firstBtnClickHandler = () => {
    setFirstBtnClicked(true);
  };

  const secondBtnClickHandler = () => {
    setSecondBtnClicked(true);
  };

  const thirdBtnClickHandler = () => {
    router.push("/kerikeri/thai");
  };

  return (
    <>
      {firstBtnClicked && (
        <EntryPagePopUp
          onClose={handlePopUpClosed}
          firstBtnTitle="Paihia Indian"
          secondBtnTitle="Paihia Thai"
          indianLink="/paihia/indian"
          thaiLink="/paihia/thai"
        />
      )}
      {secondBtnClicked && (
        <EntryPagePopUp
          indianLink="/russell/indian"
          thaiLink="/russell/thai"
          onClose={handlePopUpClosed}
          firstBtnTitle="Russell Indian"
          secondBtnTitle="Russell Thai"
        />
      )}

      <Container>
        <div className="image-wrapper">
          <Image
            src="/entry-page.jpg"
            alt="Greens Entry Page Background Image"
            fill
            priority
            quality={100}
          />
        </div>
        <div className="content-wrapper">
          <div className="content">
            <h1>Welcome to</h1>
            <div className="logo-wrapper">
              <Image
                className="logo"
                alt="Greens Logo"
                src="/greenlogo.png"
                sizes="(max-width: 1000px) 100vw, 50vw"
                fill
                priority
              ></Image>
            </div>

            <h2> Choose Location</h2>
            <div className="button-wrapper">
              <PrimaryButton
                background="true"
                variant="thai"
                onClick={firstBtnClickHandler}
              >
                Green&apos;s Paihia
              </PrimaryButton>
              <PrimaryButton
                background="true"
                variant="thai"
                onClick={secondBtnClickHandler}
              >
                Green&apos;s Russell
              </PrimaryButton>
              <PrimaryButton
                className={"wide-button"}
                background="true"
                variant="thai"
                onClick={thirdBtnClickHandler}
              >
                Greens Kerikeri
              </PrimaryButton>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image
              src="/entry-page-hero.png"
              alt="Entry page hero image"
              fill
              priority
              sizes="(max-width: 1000px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default EntryPage;
const Container = styled.div`
  position: relative;
  .image-wrapper {
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 0;
    img {
      object-fit: cover;
    }
  }
  .content-wrapper {
    position: absolute;
    z-index: 10;
    width: 95%;

    max-width: 1100px;
    align-items: center;
    display: flex;
    gap: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
  .content {
    width: 50%;
    max-width: 600px;
    @media (max-width: 1000px) {
      width: 100%;
    }
    h1 {
      font-weight: 400;
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
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(2, 1fr);
      @media (max-width: 500px) {
        flex-direction: column;
      }
      button {
        width: 100%;
      }
      .wide-button {
        grid-column: 1/3;
      }
    }
  }
  .hero-image-wrapper {
    position: relative;
    z-index: 10;
    width: 50%;
    padding-top: 40%;
    @media (max-width: 1000px) {
      display: none;
    }
    img {
      object-fit: cover;
    }
  }
`;
