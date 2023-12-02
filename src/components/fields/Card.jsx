import { LangContext } from "@/lang/TranslationProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default function Card({ title, desc, icon }) {
  const { lang } = useContext(LangContext);
  return (
    <div className="flex flex-col relative group shadow-xl before:content-[''] before:absolute before:start-0 before:top-0 before:h-full before:w-[2px] before:bg-black before:duration-200 hover:before:bg-[#ff5227]">
      <div className="icon pt-[50px] px-[40px] text-5xl text-[#ff5227]">
        {icon}
      </div>
      <h3 className="icon text-3xl font-bold py-[30px] px-[40px]">{title}</h3>
      <hr />
      <p className="icon py-[30px] px-[40px]">{desc}</p>
      <div className="pb-[50px] px-[40px] mt-auto">
        <div
          className="inline-block group-hover:bg-black rounded-full p-3 bg-gray-200"
        >
          {lang === "en" ? (
            <BiRightArrowAlt className="text-black group-hover:!text-white duration-200" />
          ) : (
            <BiLeftArrowAlt className="text-black group-hover:!text-white duration-200" />
          )}
        </div>
      </div>
    </div>
  );
}
