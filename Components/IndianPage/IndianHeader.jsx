"use client";
import React from "react";
import Logo from "../UI/Logo/Logo";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "../Header/Navbar/Navbar";
import PrimaryButton from "../UI/Button/PrimaryButton";

function IndianHeader({ contactData }) {
  // get current url
  const pathname = usePathname();
  // split url into array
  const [location, cuisine] = pathname.split("/").slice(1); // Extract "paihia" and "thai"
  // get root url to use for logo link
  const rootUrl = `/${location}/${cuisine}`;

  const menuArr = [
    {
      id: 121545,
      url: `${rootUrl}`,
      label: "Home",
    },
    {
      id: 121546,
      url: `${rootUrl}#menu`,
      label: "Menu",
    },
    {
      id: 121547,
      url: `${rootUrl}#gallery`,
      label: "Gallery",
    },
    {
      id: 121548,
      url: `${rootUrl}#about`,
      label: "About",
    },
    {
      id: 121549,
      url: `${rootUrl}#contact`,
      label: "Contact",
    },
  ];
  return (
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
    max-width: 95%;
    margin: 0 auto;
    padding: 8px 0;
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
