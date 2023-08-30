import DownIcon from "@/Components/UI/Icons/DownIcon";
import React, { useState } from "react";
import styled from "styled-components";
import { redirect, useRouter } from "next/navigation";

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
];

function ChangeLocation({ variant, currentLocation }) {
  const { push } = useRouter();

  const values = changeLocationArr.map((item, index) => {
    return (
      <option key={index} value={item.url}>
        {item.label}
      </option>
    );
  });

  const changeHandler = (e) => {
    push(e.target.value);
  };
  return (
    <Container variant={variant}>
      <div className="content-wrapper">
        <div className="title">Change Location</div>

        <div class="dropdown-container">
          <select
            id="restaurant-location"
            class="restaurant-dropdown"
            onChange={changeHandler}
          >
            <option value="" disabled selected>
              {currentLocation}
            </option>
            {values}
          </select>
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
    font-size: 12px;
  }
  .content-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 16px;
  }
  .dropdown-container {
  }

  .restaurant-dropdown {
    width: 100%;
    padding: 2px 8px;

    border: 1px solid var(--lightGreen);

    appearance: none;
    font-size: 12px;
    cursor: pointer;
    background: none;
    color: white;
    text-transform: capitalize;
    &:focus {
      outline: none;
    }
  }
`;
