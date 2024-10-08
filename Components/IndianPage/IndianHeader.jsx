"use client";
import React from "react";
import Logo from "../UI/Logo/Logo";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "../Header/Navbar/Navbar";
import PrimaryButton from "../UI/Button/PrimaryButton";
import ChangeLocation from "../Header/ChangeLocation/ChangeLocation";
import Head from "next/head";
import Script from "next/script";

function IndianHeader({ contactData }) {
  // get current url
  const pathname = usePathname();
  console.log(pathname);
  // split url into array
  const [location, cuisine] = pathname.split("/").slice(1); // Extract "paihia" and "thai"
  // get root url to use for logo link
  const rootUrl = `/${location}/${cuisine}`;
  const currentLocation = `${cuisine} ${location}`;

  const menuArr = [
    {
      id: 121545,
      url: `${rootUrl}`,
      label: "Home",
    },
    {
      id: 121546,
      url: `${rootUrl}/menu`,
      label: "Menu",
    },
    {
      id: 121548,
      url: `${rootUrl}#chef-choice`,
      label: "Chef's Choice",
    },
    {
      id: 121547,
      url: `${rootUrl}#gallery`,
      label: "Gallery",
    },

    {
      id: 121549,
      url: `${rootUrl}/contact`,
      label: "Contact",
    },
  ];
  return (
    <>
      {/* {pathname === "/paihia/indian" && (
        <Head>
          <title>My page title</title>
        </Head>
      )} */}
      <ChangeLocation variant="indian" currentLocation={currentLocation} />
      <HeaderContainer>
        <DesktopNavbar className="row-container">
          <Link href={rootUrl}>
            <Logo
              className="desktopLogo"
              logoData={contactData.acf.logo}
              header={true}
            />
          </Link>
          <Navbar firstMenuArray={menuArr} />
          <div className="button-wrapper">
            <Link
              className="order-online-btn primary-red-btn"
              href={contactData.acf.order_online_link}
            >
              Order Online
            </Link>
            <Link
              className="book-table-btn seconday-red-btn"
              href={`${rootUrl}#book-table`}
            >
              Book a Table
            </Link>
          </div>
        </DesktopNavbar>
        <MobileNavbar className="row-container">
          <Navbar firstMenuArray={menuArr} />
          <Link href={rootUrl}>
            <Logo
              className="desktopLogo"
              logoData={contactData.acf.logo}
              header={true}
            />{" "}
          </Link>
        </MobileNavbar>
      </HeaderContainer>
    </>
  );
}

export default IndianHeader;
const HeaderContainer = styled.header`
  width: 100%;

  position: relative;
  border-top: 2px solid var(--primaryRed);
  border-bottom: 2px solid var(--primaryRed);
`;
const DesktopNavbar = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;

    .button-wrapper {
      display: flex;
      gap: 16px;
      width: 500px;
    }
    ul {
      justify-content: flex-end;
      width: auto;
      margin-right: 40px;
      li {
        a {
          margin: 0 24px;
          &:hover {
            color: var(--primaryRed);
          }
        }
      }
    }
  }
  display: none;

  a {
    color: black;
  }
`;

const MobileNavbar = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center !important;
    width: 100%;
    z-index: 120;
    padding: 6px 16px;
    ul {
      background: #fff8f6;
      border: 1px solid var(--primaryRed);
      border-top: none;
      padding-left: 0;
      top: 50px;
      li {
        border-top: 1px solid var(--primaryRed);
        a {
          color: var(--primaryRed);
          &:hover {
            color: var(--primaryRed);
          }
        }
      }
    }
  }
  svg {
    path {
      fill: var(--primaryRed);
    }
  }
`;
