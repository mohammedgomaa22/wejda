"use client";
import Link from "next/link";
import Section from "../Section";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { useContext } from "react";
import { LangContext } from "@/lang/TranslationProvider";
import MainHeader from "../MainHeader";

const ServicesHome = () => {
  const {
    lang,
    tra: { homeFields },
  } = useContext(LangContext);
  return (
    <Section name="servicesHome" classname={"bg-gray-100"}>
      <div className="container">
        <MainHeader title={homeFields.title} />
        <div className="row grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {homeFields.fieldsList.map((ele) => {
            return (
              <div
                className="col border shadow-md hover:shadow-lg duration-300 bg-white"
                key={ele.id}
              >
                <div className="banner h-[280px] relative">
                  <Image
                    src={ele.banner}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    alt={homeFields.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="content relative p-10">
                  <div className="logo absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 py-3 px-5 -[130px] -[130px] rounded-full flex justify-center items-center bg-white overflow-hidden outline outline-[6px] outline-gray-500/30 mx-auto font-bold">
                    {ele.title}
                  </div>
                  <div className="description text-center text-gray-500 pt-12">
                    <p>{ele.description}</p>
                  </div>
                  <div className="more">
                    <Link
                      href={ele.page}
                      className="flex items-center gap-2 duration-500 hover:text-[#FF5227] w-fit mx-auto mt-5 text-xl font-medium"
                    >
                      {homeFields.more}
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
          })}
        </div>
      </div>
    </Section>
  );
};

export default ServicesHome;
