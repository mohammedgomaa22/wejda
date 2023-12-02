"use client";
import Image from "next/image";
import img1 from "/public/shutterstock_2010205145-min.jpg";
import img2 from "/public/shutterstock_1156539184-min.jpg";
// --------------
import Link from "next/link";
// --------------

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Section from "../Section";
import { useContext } from "react";
import { LangContext } from "@/lang/TranslationProvider";

const About = () => {
  const {
    tra: { homeAbout },
    lang,
  } = useContext(LangContext);
  return (
    <Section name="about">
      <div className="container flex flex-col lg:flex-row justify-between items-center 2xl:px-20 gap-10">
        <div className="images relative h-[490px] hidden md:block lg:flex-1 md:w-[450px] mb-10 lg:mb-0">
          <Image
            src={img1}
            alt="wejda about image"
            className="w-[380px] h-[430px] scale-x-[-1] right-0 bottom-0 absolute object-cover"
          />
          <Image
            src={img2}
            alt="wejda about image"
            className="absolute w-[380px] h-[430px] top-0 left-0 object-cover"
          />
        </div>
        <div className="text lg:w-1/2">
          <h3 className="text-3xl font-black text-[#ff5227]">
            {homeAbout.title}
          </h3>
          <h4 className="text-xl font-bold max-w-lg text-gray-700 mt-3 leading-8">
            {homeAbout.text}
          </h4>
          <p className="mt-3 text-gray-600 tracking-wide leading-8">
            {homeAbout.desc}
          </p>
          <Link
            href="/about"
            className="w-fit flex items-center gap-2 mt-2 py-2 px-3 rounded-[4px] text-md font-medium text-white bg-[#2D3F50] hover:bg-[#1c2a36] duration-300 cursor-pointer"
          >
            {homeAbout.more}
            {lang === "en" ? (
              <BsArrowRight className="shake-horizontal" />
            ) : (
              <BsArrowLeft className="shake-horizontal" />
            )}
          </Link>
        </div>
      </div>
    </Section>
  );
};
export default About;
