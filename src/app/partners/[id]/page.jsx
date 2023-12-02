"use client";
import React, { useContext } from "react";
import Image from "next/image";
import BannerPage from "@/components/BannerPage";
import Section from "@/components/Section";
import { LangContext } from "@/lang/TranslationProvider";
import Parteners from "@/components/home/Parteners";
 
export default function page({ params: { id } }) {
  const {
    tra: { partners },
    lang,
  } = useContext(LangContext);
 
  const partner = partners.partnerList.find(
    (pt) => pt.id.toString() === id.toString()
  );
 
  return (
    <div className="">
      <BannerPage
        link={partner?.title}
        section_id={"about-image"}
        title={`${
          lang === "en"
            ? "Wajda Company, an authorized agent for the company"
            : "شركة وجدة وكيل معتمد لشركة"
        }  ${partner?.title}`}
      />
 
      <Section name={"partner"} classname="mb-[-120px]">
        <div className="container">
          <div className="logo relative w-44 mx-auto">
            <Image
              src={partner?.image}
              className="max-w-full"
              alt={partner?.title}
            />
          </div>
          <div className="info mt-10 max-w-[650px] mx-auto text-center">
            <p>{partner?.description}</p>
          </div>
          <div className="img relative max-w-[650px] mx-auto text-center flex justify-center mt-10">
            <Image
              src={partner?.banner}
              className="max-w-full"
              alt={partner?.title}
            />
          </div>
        </div>
      </Section>
      <Parteners />
    </div>
  );
}