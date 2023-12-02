"use client";
import React, { useContext } from "react";
import Section from "../Section";
import { LangContext } from "@/lang/TranslationProvider";
import Card from "../fields/Card";

export default function Services() {
  const {
    tra: { maintenance },
  } = useContext(LangContext);

  const services_list = maintenance.services.map((item, index) => {
    return (
      <Card key={index} title={item.title} icon={item.icon} desc={item.desc} />
    );
  });

  return (
    <Section name={"maintenance_services"}>
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl mb-3 font-black text-[#ff5227] text-center">
            {maintenance.serviceTitle}
          </h2>
          <p className="text-center max-w-[420px]">{maintenance.serviceText}</p>
        </div>

        <div className="services_list mt-20 grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {services_list}
        </div>
      </div>
    </Section>
  );
}
