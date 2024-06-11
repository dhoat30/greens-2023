import DownIcon from "@/Components/UI/Icons/DownIcon";
import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const changeLocationArr = [
  {
    label: `Thai Paihia`,
    url: `/paihia/thai`,
  },
  {
    label: `Indian Paihia`,
    url: `/paihia/indian`,
  },
  {
    label: `Thai Russell`,
    url: `/russell/thai`,
  },
  {
    label: `Indian Russell`,
    url: `/russell/indian`,
  },
  {
    label: `Thai Kerikeri`,
    url: `/kerikeri/thai`,
  },
];

function ChangeLocation({ variant, currentLocation }) {
  const { push } = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  // click handler
  const clickHandler = (e) => {
    console.log(isDropdownVisible);
    push(e.target.getAttribute("data-value"));
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  // list items loop
  const values = changeLocationArr.map((item, index) => {
    return (
      <li key={index} data-value={item.url} onClick={clickHandler}>
        {item.label}
      </li>
    );
  });

  return (
    <Container variant={variant}>
      <div className="content-wrapper">
        <div className="title">Change Location</div>

        <div className="dropdown-container">
          <div className="current-location" onClick={toggleDropdown}>
            {currentLocation}{" "}
            <DownIcon className={`${isDropdownVisible && "rotate-icon"}`} />
          </div>
          {isDropdownVisible && <ul className="dropdown">{values}</ul>}
        </div>
      </div>
    </Container>
  );
}

export default ChangeLocation;
const Container = styled.div`
  padding: 8px 0;
  background-color: ${(props) =>
    props.variant === "thai" ? "var(--green)" : "var(--primaryRed)"};
  color: white;
  display: flex;
  justify-content: flex-end;

  .title {
    font-size: 14px;
  }
  .content-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 16px;
  }
  .dropdown-container {
    position: relative;
    li {
      text-transform: capitalize;
    }

    .current-location {
      font-size: 14px;
      border: 1px solid white;
      padding: 1px 8px;
      text-transform: capitalize;
      cursor: pointer;
      svg {
        fill: white;
        width: 20px;
        height: 20px;
      }
      .rotate-icon {
        transform: rotate(180deg);
      }
    }
    .dropdown {
      list-style: none;
      padding: 8px 16px;
      right: 0;
      position: absolute;
      background: white;
      color: var(--onSurface);
      z-index: 100;
      width: 130px;
      height: auto;

      background: rgba(255, 255, 255, 0.75);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(14.5px);
      -webkit-backdrop-filter: blur(14.5px);
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      li {
        font-size: 14px;
        padding: 8px 0;
        color: black;
        cursor: pointer;
        &:hover {
          color: ${(props) =>
            props.variant === "thai" ? "var(--green)" : "var(--primaryRed)"};
        }
      }
    }
  }
`;
