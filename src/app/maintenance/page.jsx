"use client";
import BannerPage from "@/components/BannerPage";
import Section from "@/components/Section";
import ServicesHome from "@/components/home/ServicesHome";
import About from "@/components/maintenance/About";
import Services from "@/components/maintenance/Services";
import { LangContext } from "@/lang/TranslationProvider";
import React, { useContext } from "react";

export default function page() {
  const {
    lang,
    tra: { maintenance },
  } = useContext(LangContext);
  return (
    <>
      <BannerPage
        link={maintenance.title}
        section_id={"maintenance"}
        title={maintenance.title}
      />
      <About />
      <Services />
      <ServicesHome />
      {/* 
        <Section name={"fields_list"}>
          <div className="container">
            <div className="field_list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              {field_list}
            </div>
          </div>
        </Section>
         */}
    </>
  );
}
