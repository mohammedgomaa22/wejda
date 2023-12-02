"use client";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";

// -----------
import logo from "public/logo.png";
import Image from "next/image";
// -----------
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import { LangContext } from "@/lang/TranslationProvider";
import LangToggler from "./LangToggler";
// -----------

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const {
    tra: { navLinks },
  } = useContext(LangContext);

  const navItems = navLinks.map((item, index) =>
    index === 2 ? (
      <>
        <Menu key={index + "menu"} />
        <NavItem key={index} nav={item} />
      </>
    ) : (
      <NavItem key={index} nav={item} />
    )
  );
  let scroll = 0;
  const handleScroll = (e) => {
    if (e.currentTarget.scrollY > 150) {
      if (e.currentTarget.scrollY < scroll) {
        navRef.current?.classList.remove("-translate-y-full");
      } else {
        navRef.current?.classList.add("-translate-y-full");
      }
      scroll = e.currentTarget.scrollY;
    } else {
      navRef.current?.classList.remove("-translate-y-full");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`z-10 shadow-sm bg-white duration-150 fixed top-0 w-full `}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <Link className="w-[130px] md:w-[150px] h-[70px] relative" href="/">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={70}
                priority
                className="w-full h-full object-contain"
              />
            </Link>

            <ul className="list-none hidden lg:flex items-center gap-7 text-lg font-semibold">
              {navItems}
              {/* <Menu /> */}
            </ul>

            <LangToggler />

            <button
              onClick={() => setIsOpen(true)}
              className="text-3xl lg:hidden"
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}
