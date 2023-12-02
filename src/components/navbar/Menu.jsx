"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import ServiceMenu from "./ServiceMenu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LangContext } from "@/lang/TranslationProvider";

export default function Menu() {
  const menuBtnRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, tra } = useContext(LangContext);

  const menuEnter = () => {
    setMenuOpen(true);
  };

  const menuLeave = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    // if (menuBtnRef.current) {
    menuBtnRef.current?.addEventListener("mouseenter", menuEnter);
    menuBtnRef.current?.addEventListener("mouseleave", menuLeave);

    // }
    return () => {
      menuBtnRef.current?.removeEventListener("mouseenter", menuEnter);
      menuBtnRef.current?.removeEventListener("mouseleave", menuLeave);
    };
  }, [menuBtnRef]);

  return (
    <li ref={menuBtnRef} className="relative py-7 ">
      <button
        // onClick={() => setMenuOpen((prev) => !prev)}
        className="flex items-center"
      >
        {tra.navServiceMenu.title}
        <MdKeyboardArrowDown
          className={` duration-200 ${menuOpen ? "rotate-180" : ""}`}
        />
      </button>
      {menuOpen && <ServiceMenu />}
    </li>
  );
}
