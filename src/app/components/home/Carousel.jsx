import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlide() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    customPaging: function () {
      return <span className="hidden"> </span>;
    },
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings} className="">
        <div className="flex items-center justify-center ">
          <img
            className="w-full max-h-[600px] mx-auto md:filter md:brightness-50 md:object-cover"
            alt="..."
            src={"./images/photosCarousel/image1.jpg"}
          />
        </div>
        <div className="flex items-center justify-center ">
          <img
            className="w-full max-h-[600px] mx-auto md:filter md:brightness-50 md:object-cover"
            alt="..."
            src={"./images/photosCarousel/image3.JPG"}
          />
        </div>
        <div className="flex items-center justify-center ">
          <img
            className="w-full max-h-[600px] mx-auto md:filter md:brightness-50 md:object-cover"
            alt="..."
            src={"./images/photosCarousel/image4.JPG"}
          />
        </div>
        <div className="flex items-center justify-center ">
          <img
            className="w-full max-h-[600px] mx-auto md:filter md:brightness-50 md:object-cover"
            alt="..."
            src={"./images/photosCarousel/image5.JPG"}
          />
        </div>
        <div className="flex items-center justify-center ">
          <img
            className="w-full max-h-[600px] mx-auto md:filter md:brightness-50 md:object-cover"
            alt="..."
            src={"./images/photosCarousel/image6.JPG"}
          />
        </div>
        <div className="flex items-center justify-center ">
          <img
            className="w-full max-h-[600px] mx-auto md:filter md:brightness-50 md:object-cover"
            alt="..."
            src={"./images/photosCarousel/image7.JPG"}
          />
        </div>
      </Slider>
    </div>
  );
}
