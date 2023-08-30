import React from "react";
import styled from "styled-components";
function MapSection({ mapURL }) {
  return (
    <Container>
      <IFrameStyle
        src={mapURL}
        style={{ border: "0" }}
        loading="lazy"
      ></IFrameStyle>
    </Container>
  );
}
const Container = styled.section``;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const IFrameStyle = styled.iframe`
  display: block;
  width: 100%;
  height: 500px;
  min-width: auto;
`;

export default MapSection;
