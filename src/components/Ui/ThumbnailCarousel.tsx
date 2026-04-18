"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ThumbnailCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const mainSliderRef = useRef<Slider | null>(null);
  const navSliderRef = useRef<Slider | null>(null);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: navSliderRef.current as Slider,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: navSliderRef.current as Slider,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: navSliderRef.current as Slider,
        },
      },
    ],
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current as Slider, // Ensure proper typing
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <>
      <div className="relative">
        {/* Главный слайдер */}
        <Slider {...settingsFor} ref={mainSliderRef} className="pb-3">
          <div className="relative aspect-video">
            <Image
              src="/images/ThumbnailSlider/Slide_1.jfif"
              alt="Conference"
              fill
              quality={100}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/ThumbnailSlider/Slide_2.jpg"
              alt="Conference"
              fill
              quality={100}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/ThumbnailSlider/Slide_3.jpg"
              alt="Conference"
              fill
              quality={100}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/ThumbnailSlider/Slide_4.jpg"
              alt="Conference"
              fill
              quality={100}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/ThumbnailSlider/Slide_5.jpg"
              alt="Conference"
              fill
              quality={100}
              className="rounded-lg object-cover"
            />
          </div>
        </Slider>

        {/* Слайдер миниатюр */}
        <Slider {...settingsNav} ref={navSliderRef} className="thumb mt-4">
          <div className="px-2">
            <div className="relative aspect-video cursor-pointer">
              <Image
                src="/images/ThumbnailSlider/Slide_1.jfif"
                alt="Thumbnail"
                fill
                quality={80}
                className="rounded-lg object-cover transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="relative aspect-video cursor-pointer">
              <Image
                src="/images/ThumbnailSlider/Slide_2.jpg"
                alt="Thumbnail"
                fill
                quality={80}
                className="rounded-lg object-cover transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="relative aspect-video cursor-pointer">
              <Image
                src="/images/ThumbnailSlider/Slide_3.jpg"
                alt="Thumbnail"
                fill
                quality={80}
                className="rounded-lg object-cover transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="relative aspect-video cursor-pointer">
              <Image
                src="/images/ThumbnailSlider/Slide_4.jpg"
                alt="Thumbnail"
                fill
                quality={80}
                className="rounded-lg object-cover transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          </div>
          <div className="px-2">
            <div className="relative aspect-video cursor-pointer">
              <Image
                src="/images/ThumbnailSlider/Slide_5.jpg"
                alt="Thumbnail"
                fill
                quality={80}
                className="rounded-lg object-cover transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ThumbnailCarousel;
