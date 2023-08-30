"use client";

import React from "react";
import Gallery from "../../../UI/Gallery/Gallery";
import styled from "styled-components";
import SectionTitle from "../../../UI/Titles/SectionTitle";
import AnchorLink from "../../../UI/AnchorLink/AnchorLink";
// import { usePathname } from 'next/navigation'

function IndianGallerySection({ galleryData }) {
  return (
    <Container id="gallery">
      <GalleryContainer className="row-container">
        <SectionTitle>Gallery</SectionTitle>
        <Gallery galleryData={galleryData} />
      </GalleryContainer>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  background: #fff8f6;
  padding: 100px 0;
`;
const GalleryContainer = styled.div`
  z-index: 3;
  margin-bottom: 20px;
  width: 100%;
`;

const ButtonStyle = styled(AnchorLink)`
  margin: 20px auto 0 auto;
  display: block;
  width: 150px;
`;
export default IndianGallerySection;
