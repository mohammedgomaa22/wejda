"use client";
import { useContext } from "react";
import { LangContext } from "@/lang/TranslationProvider";
import Link from "next/link";

const MarketEng = () => {
  const {
    tra: { homeServices },
  } = useContext(LangContext);

  const serviceList = homeServices.services.map((item, index) => {
    if (index % 2 === 0) {
      return (
        <div
          key={index}
          className="bx relative h-[72px] w-[220px] mx-auto py-5 px-8 text-center text-xl font-bold text-[#ff5227e0] mt-5 lg:mt-0 lg:translate-x-[105%] bg-white shadow-lg"
        >
          <div
            style={{ backgroundColor: item.color }}
            className={`icon text-white text-4xl flex justify-center items-center absolute left-0 top-0 -translate-x-full h-full w-[30%] rounded-l-full | before:hidden before:lg:block before:absolute before:left-0 before:-translate-x-full before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-10 before:bg-inherit | after:hidden after:lg:block after:absolute after:left-0 after:-translate-x-[280%] after:top-1/2 after:-translate-y-1/2 after:h-5 after:w-5 after:bg-inherit after:rounded-full after:border-[5px] after:border-white`}
          >
            {item.icon}
          </div>
          <Link href="/fields">
            {item.title}
          </Link>
        </div>
      );
    } else {
      return (
        <div
          key={index}
          className="bx relative h-[72px] w-[220px] mx-auto py-5 px-8 text-center text-xl font-bold text-[#ff5227e0] mt-5 lg:mt-0 lg:-translate-x-[105%] bg-white shadow-lg"
        >
          <div
            style={{ backgroundColor: item.color }}
            className={`icon text-white text-4xl flex justify-center items-center absolute right-0 top-0 translate-x-full h-full w-[30%] rounded-r-full  | before:hidden before:lg:block before:absolute before:right-0 before:translate-x-full before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-10 before:bg-inherit | after:hidden after:lg:block after:absolute after:right-0 after:translate-x-[280%] after:top-1/2 after:-translate-y-1/2 after:h-5 after:w-5 after:bg-inherit after:rounded-full after:border-[5px] after:border-white`}
          >
            {item.icon}
          </div>
          <Link href="/fields">
            {item.title}
          </Link>
        </div>
      );
    }
  });

  return (
    <>
      <div className="market-eng py-16">
        <div className="container">
          <h3 className="text-3xl mx-auto w-fit mb-8 font-black text-[#ff5227]">
            {homeServices.title}
          </h3>
          <div className="market py-2 relative | before:hidden before:lg:block before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-[15px] before:rounded-xl before:bg-red-500 before:-z-10">
            {serviceList}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketEng;
