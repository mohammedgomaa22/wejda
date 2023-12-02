"use client";
import { LangContext } from "@/lang/TranslationProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SideBarServices() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    tra: { navServiceMenu },
  } = useContext(LangContext);
  const service_list = navServiceMenu.links.map((item, index) => {
    return (
      <li key={index} className="py-2">
        <Link
          className={`relative text-sm hover:text-[#ff5227] duration-200 w-full inline ${
            item.href === pathname ? "text-[#ff5227] " : ""
          }`}
          href={item.href}
        >
          {item.label}
        </Link>
      </li>
    );
  });
  return (
    <>
      <li
        className="pt-5 pb-2 flex items-center"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {navServiceMenu.title}
        <MdKeyboardArrowDown
          className={` duration-200 ${menuOpen ? "rotate-180" : ""}`}
        />
      </li>
      <ul
        className={`list-none ps-3 duration-200 overflow-hidden ${
          menuOpen ? "h-[132px]" : "h-[0px]"
        }`}
      >
        {service_list}
      </ul>
    </>
  );
}
