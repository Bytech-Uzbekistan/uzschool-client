import React, { useState } from "react";
import "../styles/result.module.css";
import profileImg from "../public/profile-img.png";

const Slider = () => {
  const Slide1 = () => {
    return (
      <div className="item">
        <div className="client-detail">
          <h5>Efficient Collaborating 1</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis{" "}
          </p>
        </div>
        <div className="client-profile">
          <div className="profile-img">
            <img src={profileImg} className="img-responsive" />
          </div>
          <div className="profile-name">
            <h3>Jane Cooper</h3>
            <span>CEO at BCD Corporation</span>
          </div>
        </div>
      </div>
    );
  };
  const Slide2 = () => {
    return (
      <div className="item">
        <div className="client-detail">
          <h5>qqfhghEfficient Collaborating 2</h5>
          <p className="card-text">
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="client-profile">
          <div className="profile-img">
            <img src={profileImg} className="img-responsive" />
          </div>
          <div className="profile-name">
            <h3>Jane Cooper</h3>
            <span>CEO at ABC Corporation</span>
          </div>
        </div>
      </div>
    );
  };
  const Slide3 = () => {
    return (
      <div className="item">
        <div className="client-detail">
          <h5>zzzzzEfficient Collaborating 3</h5>
          <p className="card-text">
            sdfjhhk sdf4rtt fdgf consectetur adipiscing elit. Auctor neque sed
            imperdiet nibh lectus feugiat nunc sem.
          </p>
        </div>
        <div className="client-profile">
          <div className="profile-img">
            <img src={profileImg} className="img-responsive" />
          </div>
          <div className="profile-name">
            <h3>Jane Cooper</h3>
            <span>CEO at ABC Corporation</span>
          </div>
        </div>
      </div>
    );
  };
  const array = [<Slide1 key="1" />, <Slide2 key="2" />, <Slide3 key="3" />];
  // const [activeSlideIndex, setActiveSlideIndex] = useState()
  const [sliderArray, setSliderArray] = useState(array);
  const handleSliderArray = (index) => {
    const elementArray = [...sliderArray];
    const element = elementArray[index - 1];
    elementArray.splice(index - 1, 1);
    elementArray.splice(1, 0, element);
    setSliderArray(elementArray);
  };
  return (
    <div className="slider-section">
      <div className="gtco-testimonials">
        <div className="owl-carousel owl-carousel1 owl-theme">
          {sliderArray}
        </div>
        <div className="owl-dots">
          <button className="owl-dot" onClick={() => handleSliderArray(1)}>
            <span></span>
          </button>
          <button
            className="owl-dot active"
            onClick={() => handleSliderArray(2)}
          >
            <span></span>
          </button>
          <button className="owl-dot" onClick={() => handleSliderArray(3)}>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Slider;
