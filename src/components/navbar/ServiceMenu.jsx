import React, { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LangContext } from "@/lang/TranslationProvider";
export default function ServiceMenu() {
  const {
    lang,
    tra: { navServiceMenu },
  } = useContext(LangContext);

  const servicesItems = navServiceMenu.links.map((item, index) => {
    return (
      <li
        key={index}
        className="text-center text-sm px-6 py-2 duration-150 hover:bg-[#ff5227]"
      >
        <Link href={item.href}>{item.label}</Link>
      </li>
    );
  });
  return (
    <motion.ul
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ type: "spring" }}
      style={{ translateX: "-50%" }}
      className="absolute top-[102%] left-1/2  shadow-md bg-white"
    >
      {servicesItems}
    </motion.ul>
  );
}
