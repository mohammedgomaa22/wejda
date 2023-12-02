"use client";
import { useContext } from "react";
import Section from "../Section";
import { LangContext } from "@/lang/TranslationProvider";

const OurVision = () => {
  const {
    tra: { homeVision },
    lang,
  } = useContext(LangContext);

  const visionList = homeVision.map((item, index) => {
    if (index === homeVision.length - 1) {
      return (
        <div
          key={index}
          className="vision w-full md:w-[380px] shadow-sm bg-white px-5 py-3 rounded-md text-gray-600 | duration-300 hover:bg-[#2D3F50] hover:text-gray-400"
        >
          <h3 className="text-lg mb-2 font-black text-[#ff5227]">
            {item.title}
          </h3>
          <p className="leading-8">{item.text}</p>
        </div>
      );
    }
    return (
      <div
        key={index}
        className="mission w-full md:w-[380px] shadow-sm -translate-y-4 bg-[#2D3F50] text-white px-5 py-3 rounded-md"
      >
        <h3 className="text-lg mb-2 font-black text-[#ff5227]">{item.title}</h3>
        <p className="text-gray-400 leading-8">{item.text}</p>
      </div>
    );
  });
  return (
    <Section name="our-vision" classname={"bg-gray-100"}>
      <div className="container 2xl:px-20">
        <div className="row md:flex gap-10 justify-center">{visionList}</div>
      </div>
    </Section>
  );
};

export default OurVision;
