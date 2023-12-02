"use client";
import Image from "next/image";
import img1 from "/public/home/home-456546.jpg";
import img2 from "/public/home/suprek.templines.org-home-345435.jpg";
import img from "public/maintenance/maintenance.jpg";
// --------------
import Link from "next/link";
// --------------

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Section from "../Section";
import { useContext } from "react";
import { LangContext } from "@/lang/TranslationProvider";

const About = () => {
  const {
    tra: { maintenance },
    lang,
  } = useContext(LangContext);
  return (
    <Section name="maintenance_about">
      <div className="container grid grid-cols-1 xl:grid-cols-2 justify-between items-center gap-10">
        <div className="images h-[490px] ">
          <Image
            src={img}
            alt="wejda about image"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="text ">
          <h3 className="text-3xl font-black text-[#ff5227]">
            {maintenance.title}
          </h3>
          <h4 className="text-xl font-bold max-w-lg text-gray-700 mt-3 leading-8">
            {maintenance.text}
          </h4>
          <p className="mt-3 text-gray-600 tracking-wide leading-8">
            {maintenance.desc}
          </p>
        </div>
      </div>
    </Section>
  );
};
export default About;
