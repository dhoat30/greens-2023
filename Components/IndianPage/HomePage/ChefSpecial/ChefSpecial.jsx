"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
function ChefSpecial({ favouriteMenuData, orderOnlineLink }) {
  const cardItem = favouriteMenuData.map((item) => {
    return (
      <li className="item" key={item.id}>
        <div className="image-wrapper">
          <Image src={item.acf.dish_image.url} fill alt="Curry Image" />
        </div>
        <div className="content-wrapper">
          <h5 className="card-title">{item.title.rendered}</h5>
          <p className="card-text">{item.acf.description}</p>
        </div>
      </li>
    );
  });
  return (
    <>
      <Container>
        <div className="row-container">
          <h2 className="section-title-indian title-border"> Chef's Special</h2>
          <ul className="flex-wrapper">
            {cardItem}
            <a
              className="primary-red-btn"
              href={orderOnlineLink}
              target="_blank"
            >
              Order Online
            </a>
          </ul>
        </div>
      </Container>
    </>
  );
}

export default ChefSpecial;
const Container = styled.section`
  background-color: #fff8f6;
  padding: 80px 0;
  a {
    margin: 16px auto 0 auto;
    width: 200px;
  }
  .flex-wrapper {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 40px auto;
    padding-left: 0;
    @media (max-width: 800px) {
      gap: 16px;
    }
    .item {
      border-radius: 8px;
      background: #fff;
      box-shadow: 0px 0px 0px 0px rgba(138, 3, 1, 0.1),
        0px 5px 11px 0px rgba(138, 3, 1, 0.1),
        0px 20px 20px 0px rgba(138, 3, 1, 0.09),
        0px 45px 27px 0px rgba(138, 3, 1, 0.05),
        0px 80px 32px 0px rgba(138, 3, 1, 0.01),
        0px 126px 35px 0px rgba(138, 3, 1, 0);
      width: calc(50% - 20px);
      display: flex;
      gap: 16px;
      align-items: center;
      @media (max-width: 800px) {
        width: 100%;
      }
      .image-wrapper {
        position: relative;
        width: 100px;
        height: 100%;
        flex-shrink: 0;
        img {
          object-fit: cover;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
      }
      .content-wrapper {
        padding: 16px 8px;
      }
    }
  }
`;
