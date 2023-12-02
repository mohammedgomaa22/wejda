"use client";
import React, { useContext } from "react";
import Image from "next/image";
import BannerPage from "@/components/BannerPage";
import Section from "@/components/Section";
import OurVision from "@/components/about/OurVision";

// -------------
import img1 from "/public/about_banner.png";
import MainHeader from "@/components/MainHeader";
import { LangContext } from "@/lang/TranslationProvider";
import ContactUs from "@/components/ContactUs";

export default function page() {
  const {
    tra: { about },
  } = useContext(LangContext);
  return (
    <>
      <BannerPage
        link={about.title}
        section_id={"about-image"}
        title={about.title}
      />

      <Section name={"about"}>
        <div className="container">
          <MainHeader
            title={about.header.mainHeader}
            text={about.header.text}
          />

          <div className="row flex flex-col lg:flex-row justify-between items-center 2xl:px-20 gap-10">
            <div className="image self-start relative h-[380px]  lg:flex-1 mb-10 lg:mb-0">
              <Image
                src={about.img}
                alt="wejda about image"
                className="w-full h-full object-cover shadow-lg rounded-md"
              />
            </div>
            <div className="text lg:w-1/2">
              <h4 className="text-xl font-bold max-w-lg text-gray-700 mt-3 leading-8">
                {about.sectionHeader}
              </h4>
              <p
                dangerouslySetInnerHTML={{ __html: about.sectionText1 }}
                className="mt-3 text-gray-600 tracking-wide leading-8"
              ></p>
              <p
                dangerouslySetInnerHTML={{ __html: about.sectionText2 }}
                className="mt-3 text-gray-600 tracking-wide leading-8"
              ></p>
            </div>
          </div>
        </div>
      </Section>
      <OurVision />
      <ContactUs />
    </>
  );
}
