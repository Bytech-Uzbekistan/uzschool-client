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

// import React from "react";
// import { UncontrolledCarousel, Row, Col } from "reactstrap";

// const items = [
//   {
//     src: {profileImg},
//     altText: "Slide 1",
//     caption: "",
//     header: "",
//     key: "1",
//   },
//   {
//     src: {profileImg},
//     altText: "Slide 2",
//     caption: "",
//     header: "",
//     key: "2",
//   },
//   {
//     src: {profileImg},
//     altText: "Slide 3",
//     caption: "",
//     header: "",
//     key: "3",
//   },
// ];

// const Slider = () => (
//   <Row>
//     <Col md="8" className="mx-auto">
//       <UncontrolledCarousel items={items} />
//     </Col>
//   </Row>
// );

// export default Slider;

// import "../carousel.css";
// import Link from "next/link";
// import Router from "next/router";
// import Image from "next/image";

// const Slider = () => (
//   <div className="slider">
//     <Link href="/">
//       {/* <a>1</a> */}
//       <Image src={profileImg}/>
//     </Link>
//     <Link href="/">
//       {/* <a>2</a> */}
//       <Image src={profileImg}/>
//     </Link>
//     <Link href="/">
//       {/* <a>3</a> */}
//       <Image src={profileImg}/>
//     </Link>
//     {/* <Link href="#slide-4" scroll={false}>
//       <a>4</a>
//     </Link>
//     <Link href="#slide-5" scroll={false}>
//       <a>5</a>
//     </Link> */}

//     <div className="slides">
//       <div name="slide-1" id="slide-1">
//         1
//       </div>
//       <div name="slide-2" id="slide-2">
//         2
//       </div>
//       <div id="slide-3">3</div>
//       <div id="slide-4">4</div>
//       <div id="slide-5">5</div>
//     </div>
//   </div>
// );

// export default Slider
