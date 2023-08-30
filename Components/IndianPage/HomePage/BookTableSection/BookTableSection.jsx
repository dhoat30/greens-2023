import React from "react";
import styled from "styled-components";
import Image from "next/image";
import SectionTitle from "@/Components/UI/Titles/SectionTitle";
import Link from "next/link";

function BookTableSection({ contactInfoData }) {
  return (
    <Container id="book-table">
      <div className="overlay"></div>
      <div className="background-image-wrapper">
        <Image
          className="desktop-image"
          src={contactInfoData.acf.res_diary_background_image.url}
          fill
          priority
          alt="Book a table background Image"
        />
        <Image
          className="mobile-image"
          src={contactInfoData.acf.res_diary_background_image.url}
          fill
          priority
          alt="Book a table background Image"
        />
      </div>
      <div className="content-wrapper">
        <h2 className="section-title-indian title-border" color="white">
          Book a Table
        </h2>
        <div
          className="res-diary-iframe-wrapper"
          dangerouslySetInnerHTML={{
            __html: contactInfoData.acf.resdiary_iframe,
          }}
        />
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;

  .content-wrapper {
    width: 100%;
    position: absolute;
    top: 120px;
    z-index: 10;
    @media (max-width: 768px) {
      top: 60px;
    }
    h2 {
      color: white;
    }
    .res-diary-iframe-wrapper {
      iframe {
        width: 100%;
        height: 600px;
      }
    }
  }
  .overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 850px;
    z-index: 1;
  }
  .background-image-wrapper {
    position: relative;
    width: 100%;
    height: 850px;
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
export default BookTableSection;
