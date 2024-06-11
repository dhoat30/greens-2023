"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ComingSoon() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <div
          className="image-wrapper"
          style={{ position: "relative", paddingBottom: "100%" }}
        >
          <Image
            src="/kerikeri-coming-soon/IMG_2575.jpg"
            alt="coming soon banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div>
        <div
          className="image-wrapper"
          style={{ position: "relative", paddingBottom: "100%" }}
        >
          <Image
            src="/kerikeri-coming-soon/IMG_2573.jpg"
            alt="coming soon banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div>
        <div
          className="image-wrapper"
          style={{ position: "relative", paddingBottom: "100%" }}
        >
          <Image
            src="/kerikeri-coming-soon/IMG_2576.jpg"
            alt="coming soon banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </Slider>
  );
}
