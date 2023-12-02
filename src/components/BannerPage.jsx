"use client";
import { LangContext } from "@/lang/TranslationProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function BannerPage({ title, link }) {
  const { lang } = useContext(LangContext);
  return (
    <div className="relative">
      <div
        id={"page-banner"}
        className="h-[350px] py-[30px] px-[40px] flex items-center justify-center"
      >
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>
      <button className="absolute flex gap-2 md:gap-4 rounded-sm items-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2  text-white bg-[#ff5227] rounded-0 px-4 md:px-8 py-4">
        <Link href={"/"}>{lang === "ar" ? "الرئيسيه" : "Home"}</Link>
        {lang === "ar" ? <BsArrowLeft /> : <BsArrowRight />}
        <span className=" whitespace-nowrap">{link}</span>
      </button>
    </div>
  );
}
