"use client";
import BannerPage from "@/components/BannerPage";
import Section from "@/components/Section";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { LangContext } from "@/lang/TranslationProvider";
import ServicesHome from "@/components/home/ServicesHome";

export default function page() {
  const {
    tra: { consulting },
  } = useContext(LangContext);
  return (
    <>
      <BannerPage
        link={consulting.title}
        section_id={"consulting"}
        title={consulting.title}
      />

      <Section name={"consulting"}>
        <div className="container">
          <div className="head mb-14">
            <h3 className="text-4xl md:text-[40px] text-center font-extrabold text-gray-900 w-fit mx-auto">
              {consulting.header.mainHeader}
            </h3>
            <p className="text-xl mt-5 text-center text-gray-600 max-w-[600px] mx-auto">
              {consulting.header.text}
            </p>
          </div>
          <div className="row flex flex-col lg:flex-row justify-between items-center 2xl:px-20 gap-10">
            <div className="images relative lg:h-[400px] lg:flex-1 lg:mb-0">
              <Image
                src={consulting.consultingImg}
                alt="wejda about image"
                className="w-full h-full object-cover shadow-lg rounded-md"
              />
            </div>
            <div className="text lg:w-1/2 text-center lg:text-left">
              <p className="mt-3 text-gray-600 tracking-wide leading-8">
                {consulting.description1}
              </p>
              <hr />
              <p className="text-gray-600 tracking-wide leading-8">
                {consulting.description2}
              </p>
            </div>
          </div>
          <div className="contact mt-14">
            <p className="text-xl font-semibold mt-5 text-center text-gray-600 max-w-[600px] mx-auto">
              {consulting.contactText}
            </p>
            <Link
              href="/contact"
              className="w-fit mx-auto mt-5 block py-2 px-5 rounded-md text-gray-100 bg-gray-800 hover:bg-[#FF5227] hover:text-white duration-300"
            >
              {consulting.contact}
            </Link>
          </div>
        </div>
      </Section>
      <ServicesHome />
    </>
  );
}
