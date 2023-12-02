"use client";
import { createContext, useEffect, useState } from "react";
import { translation } from "@/lang/lang";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  let tra = lang === "en" ? translation["en"] : translation["ar"];
  useEffect(() => {
    const lang = JSON.parse(window.localStorage.getItem("lang")) || "en";
    setLang(lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "en" ? "Wejda" : "وجده";
    window.localStorage.setItem("lang", JSON.stringify(lang));
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    lang === "en"
      ? document.body.classList.remove("rtl")
      : document.body.classList.add("rtl");
  }, [lang]);

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <LangContext.Provider value={{ toggleLang, lang, tra }}>
      {children}
    </LangContext.Provider>
  );
};
