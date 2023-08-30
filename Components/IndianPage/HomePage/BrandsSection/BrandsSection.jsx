import React from "react";
import styled from "styled-components";
import Image from "next/image";

function BrandsSection({ brandsData }) {
  console.log(brandsData);
  const images = brandsData.acf.brands.map((item) => {
    return (
      <div className="image-wrapper" key={item.id}>
        <Image src={item.url} alt="brand image" fill />
      </div>
    );
  });
  return (
    <Container>
      <h3 className="title-border section-title-indian"> Our Brands</h3>
      <div className="flex-wrapper">{images}</div>
    </Container>
  );
}

export default BrandsSection;
const Container = styled.section`
  padding: 80px 16px;
  max-width: 1100px;
  margin: 0 auto;

  .flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    gap: 16px;
    justify-content: space-around;

    .image-wrapper {
      position: relative;
      width: 150px;
      height: 100px;
      img {
        object-fit: contain;
      }
    }
  }
`;
