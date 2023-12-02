"use client";
import BannerPage from "@/components/BannerPage";
import MainHeader from "@/components/MainHeader";
import Section from "@/components/Section";
import Card from "@/components/fields/Card";
import ServicesHome from "@/components/home/ServicesHome";
import { LangContext } from "@/lang/TranslationProvider";
import { fields_list } from "@/utils/helpers";
import React, { useContext } from "react";

export default function page() {
  const {
    lang,
    tra: { fields },
  } = useContext(LangContext);

  const field_list = fields.fieldsList.map((field, index) => {
    return (
      <Card
        key={index}
        title={field.name}
        desc={field.description}
        icon={field.icon}
      />
    );
  });
  return (
    <>
      <BannerPage
        link={fields.title}
        section_id={"fields"}
        title={fields.title}
      />
      {/* ------Edit-------- */}
      {/* ------Edit-------- */}

      <Section name={"fields_list"}>
        
      <MainHeader title={fields.header.mainHeader} text={fields.header.text}/>
        <div className="container">
          <div className="field_list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {field_list}
          </div>
        </div>
      </Section>
      <ServicesHome />
    </>
  );
}
