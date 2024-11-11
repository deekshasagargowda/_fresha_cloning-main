import React from "react";
import { testimonial } from "../data/Data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="owl-carousel testimonial-carousel py-5">
            <Slider {...settings}>
              {testimonial.map((item, key) => (
                <div
                  key={key}
                  className="testimonial-item position-relative bg-white rounded overflow-hidden"
                >
                  <p className="mb-4 text-center">{item.description}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src={item.img}
                      style={{ width: "70px", height: "70px" }}
                      alt={`${item.name}'s image`}
                    />
                    <div className="ps-3 text-center">
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <small>{item.profession}</small>
                    </div>
                  </div>
                  {item.icon && (
                    <div className="position-absolute top-0 end-0 p-2">{item.icon}</div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
