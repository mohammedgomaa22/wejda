import { LangContext } from "@/lang/TranslationProvider";
import React, { useContext } from "react";
import { BsTranslate } from "react-icons/bs";

export default function LangToggler() {
  const { toggleLang, lang } = useContext(LangContext);
  return (
    <div
      onClick={() => toggleLang(lang === "ar" ? "en" : "ar")}
      className="cursor-pointer duration-200 p-2 border rounded-md hover:text-[#ff5227] ms-auto lg:ms-0 me-3 lg:me-0"
    >
      <BsTranslate className="text-xl" />
    </div>
  );
}
