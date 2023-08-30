import React from "react";
import Carousels from "../../../UI/Carousels/Carousels";
import styled from "styled-components";
import SectionTitle from "../../../UI/Titles/SectionTitle";

import QuoteIcon from "../../../UI/Icons/QuoteIcon";
function TestimonialSection({ testimonialData }) {
  const testimonialArray = testimonialData.map((data) => {
    return {
      title: data.title.rendered,
      id: data.id,
      content: data.acf.testimony,
    };
  });
  return (
    <Container>
      <div className="flex-wrapper ">
        <div className="title-section">
          <h3 className="section-title-indian ">
            What Our Customers Are Saying
          </h3>
        </div>

        <TestimonialBox>
          <div>
            <QuoteIconStyle />
            <CarouselsStyle data={testimonialArray} />
          </div>
        </TestimonialBox>
      </div>
    </Container>
  );
}

export default TestimonialSection;
const Container = styled.section`
  position: relative;

  .flex-wrapper {
    width: 100%;
    display: flex;
    gap: 40px;
    height: 500px;
    .title-section {
      width: 50%;
      background: var(--primaryRed);
      display: flex;
      align-items: center;
      padding: 0 0 0 160px;
      h3 {
        text-align: left;
        color: white;
      }
    }
  }
`;
const TestimonialBox = styled.div`
  margin: 0 auto;
  width: 50%;
  padding: 0 160px 0 0;
  display: flex;
  align-items: center;
`;
const CarouselsStyle = styled(Carousels)`
  margin-top: 50px;
`;
const QuoteIconStyle = styled(QuoteIcon)`
  width: 80px;
  margin: 0 auto;
  display: block;
  path {
    fill: var(--primaryRed);
  }
`;
