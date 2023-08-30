"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import SectionTitle from "@/Components/UI/Titles/SectionTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeroSection({ sliderData }) {
  const pathname = usePathname();
  const searchTerm = pathname;
  const [location, cuisine] = searchTerm.split("/").slice(1); // Extract "paihia" and "thai"
  const rootUrl = `/${location}/${cuisine}`;

  const acfData = sliderData.map((item) => {
    return {
      title: item.acf.title,
      subtitle: item.acf.sub_title,
      phoneNumber: item.acf.phone_number,
      orderOnlineLink: item.acf.order_online_link,
      bookTable: "#book-table",
      id: item.id,
      mobileImage: item.acf.mobile_image_.url,
      desktopImage: item.acf.desktop_image.url,
    };
  });

  return (
    <Container>
      <div className="background-image-wrapper">
        <Image
          className="desktop-image"
          src={acfData[0].desktopImage}
          fill
          priority
          alt="background image"
        />
        <Image
          className="mobile-image"
          src={acfData[0].mobileImage}
          fill
          priority
          alt="background image"
        />
      </div>
      <div className="content-wrapper">
        <SectionTitle subTitle={acfData[0].subtitle} color="white">
          {" "}
          {acfData[0].title}{" "}
        </SectionTitle>
        <div className="buttons-wrapper">
          <a
            target="_blank"
            href={acfData[0].orderOnlineLink}
            className="primary-red-btn"
          >
            Order Online
          </a>
          <Link href={`${rootUrl}#book-table`} className="primary-red-btn">
            Book a Table
          </Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  background-color: var(--lightGreen);
  .content-wrapper {
    position: absolute;
    top: 50%;
    margin-left: 60px;
    transform: translate(-0%, -50%);
    @media (max-width: 768px) {
      width: 95%;
      margin-left: 8px;
      margin-right: 8px;
    }
    width: 60%;

    h3 {
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      text-align: left;
      line-height: 4rem;
      @media (max-width: 450px) {
        line-height: 3rem;
      }
    }
    .buttons-wrapper {
      display: flex;
      flex-direction: row;
      gap: 16px;
      max-width: 350px;
      margin-top: 32px;
      @media (max-width: 450px) {
        flex-direction: column;
      }
    }
  }

  .background-image-wrapper {
    position: relative;
    width: 100%;
    height: 80vh;
    .desktop-image {
      object-fit: cover;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .mobile-image {
      object-fit: cover;
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }
  }
`;

export default HeroSection;
