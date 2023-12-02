"use client";
import { AiOutlineClose } from "react-icons/ai";
import NavItem from "./NavItem";
import logo from "public/logo.png";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { LangContext } from "@/lang/TranslationProvider";
import { usePathname } from "next/navigation";
import SideBarServices from "./SideBarServices";

// -------------

const Sidebar = ({ isOpen, setIsOpen }) => {
  const {
    lang,
    tra: { navLinks },
  } = useContext(LangContext);
  const layerRef = useRef();
  const pathname = usePathname();

  const navItems = navLinks.map((item, index) =>
    index === 2 ? (
      <>
        <SideBarServices key={index + "sidebar"} />
        <NavItem key={index} nav={item} />
      </>
    ) : (
      <NavItem key={index} nav={item} />
    )
  );

  const handleClick = (e) => {
    if (layerRef.current.contains(e.target)) {
      return;
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        ref={layerRef}
        className={`sidebar h-screen w-[60%] min-w-[280px] max-w-[300px] bg-white fixed ${
          lang === "ar"
            ? "right-0 translate-x-full duration-0"
            : "left-0 -translate-x-full  duration-0"
        } ${isOpen ? "!translate-x-0 duration-300" : ""} top-0 z-50 `}
      >
        <div className={`py-3 flex justify-between items-center `}>
          <div className="w-[130px] md:w-[150px] h-[70px] relative px-2">
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={70}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <div onClick={() => setIsOpen(false)} className="close p-3 text-lg">
            <AiOutlineClose className="text-black" />
          </div>
        </div>
        <ul className="list-none mt-3 p-3 flex flex-col text-lg font-semibold">
          {navItems}
        </ul>
      </div>

      <div
        onClick={handleClick}
        className={`layer z-40 h-[100vh]  bg-[#4d58694f] fixed top-0 ${
          lang === "ar" ? "right-0" : "left-0"
        }  duration-200 ease-in-out ${isOpen ? "w-[100%]" : "w-0"}`}
      ></div>
    </>
  );
};

export default Sidebar;
