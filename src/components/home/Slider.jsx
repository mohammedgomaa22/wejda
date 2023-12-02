"use client";

import Image from "next/image";
import Link from "next/link";
// -----------------
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { bannerImages } from "../../../src/utils/helpers";
// -----------------

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { LangContext } from "@/lang/TranslationProvider";

const Slider = () => {
  const {
    tra: { mainBanner },
    lang,
  } = useContext(LangContext);
  return (
    <div className="row flex h-[100vh] relative">
      <div className="col banner relative w-full h-full ">
        <Swiper
          dir={lang === "en" ? "rtl" : "ltr"}
          key={lang}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Keyboard]}
          className="mySwiper !h-full"
        >
          <div className="text absolute h-full w-full top-0 left-0 bg-[#000]/[0.70] text-white flex flex-col justify-center items-center text-center xl:items-start xl:text-right px-3 z-10">
            <h2 className="text-3xl md:text-6xl font-bold mx-auto text-center mb-4">
              {mainBanner.title}
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-[500px] mx-auto text-center">
              {mainBanner.text}
            </p>
            <Link
              href="/about"
              className="w-fit mx-auto flex items-center gap-2 mt-4 py-[7px] px-4 rounded-[4px] text-lg font-medium text-white bg-[#FF5227] hover:bg-[#e84d27] duration-300 cursor-pointer"
            >
              {lang === "en" ? (
                <BsArrowRight className={`shake-horizontal`} />
              ) : (
                <BsArrowLeft className={`shake-horizontal`} />
              )}
              {mainBanner.more}
            </Link>
          </div>
          {bannerImages.map((image, index) => {
            return (
              <SwiperSlide key={index} className="w-full h-full relative">
                <Image
                  src={image.image}
                  loading="eager"
                  alt="wajda images"
                  className="object-cover h-full w-full"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
