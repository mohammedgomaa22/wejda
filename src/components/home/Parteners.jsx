"use client";
import { partenres } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { LangContext } from "@/lang/TranslationProvider";

export default function Parteners() {
  const {
    lang,
    tra: { homePartners, partners },
  } = useContext(LangContext);

  const partener_list = partners.partnerList.map((item) => {
    return (
      <SwiperSlide key={item.id} className="!h-[60px] !lg:h-[90px]">
        <Link
          key={item.id}
          href={`/partners/${item.id}`}
          className="w-full h-full"
        >
          <Image
            src={item.image}
            alt={item.title}
            className="object-contain grayscale duration-150 hover:grayscale-0 hover:scale-110 w-full h-full"
          />
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <Section name={"parteners"}>
      <div className="container">
        <div className="main-header flex flex-col items-center gap-4">
          <h2 className="text-center text-[#ff5227] text-3xl font-black">
            {homePartners.title}
          </h2>
          <p className="max-w-[560px] text-center">{homePartners.text}</p>
        </div>

        <Swiper
          dir="ltr"
          key={lang}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            440: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
          }}
          spaceBetween={80}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper mt-10 !py-5"
        >
          {partener_list}
        </Swiper>
      </div>
    </Section>
  );
}
