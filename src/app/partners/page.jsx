"use client";
import React, { useContext } from "react";
import BannerPage from "@/components/BannerPage";
import Section from "@/components/Section";
// import { partners_list } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { LangContext } from "@/lang/TranslationProvider";
import MainHeader from "@/components/MainHeader";
import ContactUs from "@/components/ContactUs";

export default function page() {
  const {
    lang,
    tra: { partners },
  } = useContext(LangContext);

  const partner_list = partners.partnerList.map((ele, index) => {
    return (
      <div
        className="border flex flex-col shadow-md hover:shadow-lg duration-300"
        key={index}
      >
        <div className="banner shrink-0 h-[236px] w-full relative">
          <Image src={ele.banner} className="w-full h-full object-cover" />
        </div>

        <div className="content flex-1 flex flex-col relative pt-16 p-10">
          <div className="logo absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 h-[100px] w-[100px] lg:h-[110px] lg:w-[110px] rounded-full flex justify-center items-center bg-white overflow-hidden border-[10px] border-[#333]/5 mx-auto">
            <Image src={ele.image} className="max-w-[70%] object-contain" />
          </div>
          <div className="title pb-5 text-center text-xl font-bold text-[#333333]">
            <h2>{ele.title}</h2>
          </div>
          <div className="description line-clamp-4 mb-2 text-center text-gray-500">
            <p>{ele.description}</p>
          </div>
          <div className="more mt-auto">
            <Link
              href={`/partners/${ele.id.toString()}`}
              className="flex items-center gap-2 duration-500 hover:text-[#FF5227] w-fit mx-auto text-xl font-medium"
            >
              {partners.more}
              {lang === "en" ? (
                <FiArrowRight className="text-[#FF5227] mt-1 text-base" />
              ) : (
                <FiArrowLeft className="text-[#FF5227] mt-1 text-base" />
              )}
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="">
      <BannerPage
        link={partners.title}
        section_id={"about-image"}
        title={partners.title}
      />

      <Section name={"partners"}>
        <div className="container">
          <MainHeader
            title={partners.header.mainHeader}
            text={partners.header.text}
          />

          <div className="row grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
            {partner_list}
          </div>
        </div>
      </Section>
      <ContactUs />
    </div>
  );
}
