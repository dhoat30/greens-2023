"use client";
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Logo from "../UI/Logo/Logo";
import axios from "axios";
import ColumnTitle from "../UI/Titles/ColumnTitle";
import AnchorLinkIcon from "../UI/AnchorLinkIcon/AnchorLinkIcon";
import Copyright from "../UI/Copyright/Copyright";
import MobileFixedButtons from "../UI/MobileFixedButtons/MobileFixedButtons";
import FacebookIcon from "../UI/Icons/FacebookIcon";
import TripAdvisorIcon from "../UI/Icons/TripAdvisorIcon";
import Map from "../UI/Icons/Map";
import Phone from "../UI/Icons/Phone";
import Email from "../UI/Icons/Email";
import { usePathname } from "next/navigation";
import Image from "next/image";
const IndianFooter = ({ contactData }) => {
  const pathname = usePathname();
  const searchTerm = pathname;
  const [location, cuisine] = searchTerm.split("/").slice(1); // Extract "paihia" and "thai"
  const rootUrl = `/${location}/${cuisine}`;
  const filteredItems = [
    {
      url: rootUrl,
      orderOnlineLink: contactData.acf.order_online_link,
      logo: contactData.acf.logo,
      streetAddress: contactData.acf.street_address,
      region: contactData.acf.region,
      phone: contactData.acf.phone,
      email: contactData.acf.email,
      facebook: contactData.acf.facebook,
      tripAdvisor: contactData.acf.trip_advisor,
      menuLog: contactData.acf.menu_log,
      openingHours: contactData.acf.opening_hours,
      closed: contactData.acf.closed_,
      copyright: contactData.acf.copyright,
      orderOnlineLink: contactData.acf.order_online_link,
      popUpImage: contactData.acf.pop_up_image,
    },
  ];
  // const filteredcontactDatas = contactData.map((item) => {
  //   if (item.slug.includes(location) && item.slug.includes(cuisine)) {
  //     return {
  //       url: pathname,
  //       orderOnlineLink: item.acf.order_online_link,
  //       logo: item.acf.logo,
  //       streetAddress: item.acf.street_address,
  //       region: item.acf.region,
  //       phone: item.acf.phone,
  //       email: item.acf.email,
  //       facebook: item.acf.facebook,
  //       tripAdvisor: item.acf.trip_advisor,
  //       menuLog: item.acf.menu_log,
  //       openingHours: item.acf.opening_hours,
  //       closed: item.acf.closed_,
  //       copyright: item.acf.copyright,
  //       orderOnlineLink: item.acf.order_online_link,
  //       popUpImage: item.acf.pop_up_image,
  //     };
  //   }
  // });
  let urlData = filteredItems.filter((item) => item !== undefined);

  return (
    <React.Fragment>
      <Container>
        <Content className="row-container">
          <ContactBox>
            <ColumnTitle color="var(--onSurface)">Contact Us</ColumnTitle>
            <Items>
              <Anchor href={`tel: ${urlData[0].phone}`}>
                <Phone />
                <span>{urlData[0].phone}</span>
              </Anchor>

              <Anchor href={`mailto: ${urlData[0].email}`} targetblank="_blank">
                <Email />
                <span>{urlData[0].email}</span>
              </Anchor>
              <Anchor href={`${urlData[0].streetAddress}`} targetblank="_blank">
                <Map />
                <span>
                  {urlData[0].streetAddress}{" "}
                  <SecondText>{urlData[0].region}</SecondText>
                </span>
              </Anchor>
            </Items>
          </ContactBox>

          <LogoContainer>
            <div className="logo-wrapper">
              <Image
                src={urlData[0].logo.url}
                width="153"
                height="52"
                alt="Logo"
              />
            </div>

            <SocialContainer>
              <AnchorLinkIcon
                target="_blank"
                link={urlData[0].facebook}
                size="35px"
              >
                <FacebookIcon />
              </AnchorLinkIcon>
              <AnchorLinkIcon
                target="_blank"
                link={urlData[0].tripAdvisor}
                size="35px"
              >
                <TripAdvisorIcon />
              </AnchorLinkIcon>
            </SocialContainer>
          </LogoContainer>

          <OpeningHoursContainer>
            <ColumnTitle color="var(--onSurface)">Opening Hours</ColumnTitle>
            <Items>
              {urlData[0].openingHours.map((item, index) => {
                return (
                  <OpeningHoursItem key={index}>
                    <SecondText>{item.opening_days} </SecondText>
                    <SecondText>{item.opening_hours} </SecondText>
                  </OpeningHoursItem>
                );
              })}
            </Items>
          </OpeningHoursContainer>
        </Content>
        <Copyright copyright={urlData[0].copyright} />
        <MobileFixedButtons
          className="mobile-fixed-btn-wrapper"
          orderOnlineLink={urlData[0].orderOnlineLink}
          phoneNumber={urlData[0].phone}
        />
      </Container>
      {/* 
            <PopupContainer>
                <Image src={urlData[0].popUpImage} layout="responsive" width={100} height={100} />
            </PopupContainer> */}
    </React.Fragment>
  );
};

const Container = styled.section`
  background: #fff8f6;
  padding: 50px 0 0 0;
  .mobile-fixed-btn-wrapper {
    a {
      color: white !important;
    }
  }
  svg {
    color: var(--onSurface);
    fill: var(--onSurface);

    circle {
      fill: var(--onSurface);
    }
  }
  span {
    color: var(--onSurface);
  }
  a {
    color: var(--onSurface);
  }
  div {
    color: var(--onSurface);
  }
`;

const SecondText = styled.span`
  margin-left: 2px;
  display: block;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: 630px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const ContactBox = styled.div``;
const LogoContainer = styled.div`
  margin: 15px 0;
  @media (max-width: 630px) {
    margin: 20px 0 -20px 0;
  }
`;
const OpeningHoursContainer = styled.div``;
const Items = styled.div`
  margin-top: 10px;
  svg {
    width: 30px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
  margin: 20px auto;
  svg {
    width: 50px;
    &:hover {
      circle {
        fill: var(--onSurface);
      }
    }
  }
`;
const OpeningHoursItem = styled.div`
  margin-top: 5px;
  color: var(--onSurface);
`;
const Anchor = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: var(--poppins);
  font-weight: 400;
  color: var(--onSurface);
  margin-bottom: 10px;
  &:hover {
    color: var(--onSurface);
    cursor: pointer;
    svg {
      circle {
        fill: var(--onSurface);
      }
    }
  }
  svg {
    margin-right: 5px;
  }
`;
const PopupContainer = styled.div`
  width: 70%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: scroll;
`;
export default IndianFooter;
