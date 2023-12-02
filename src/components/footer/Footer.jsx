"use client";
import React, { useContext } from "react";
import Link from "next/link";

import { footerData, socialLinks } from "@/utils/helpers";

import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineWhatsApp } from "react-icons/ai";

// ---------
import logo from "public/logo.png";
import Image from "next/image";
import { LangContext } from "@/lang/TranslationProvider";
// ---------

export default function Footer() {
  const {
    tra: { footer },
    lang,
  } = useContext(LangContext);
  return (
    <footer className="pt-20 bg-[#122239]">
      <div className="container">
        <div className="grid gird-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 justify-between text-white">
          <div className="lg:pe-5 order-2 lg:order-1 pb-5 lg:border-e-[1px] border-e-[#ffffff1a]">
            <h4
              className="relative mb-6 text-6xl text-[#ff5328] font-bold text-center sm:text-start"
              href="/"
            >
              {footer.title}
            </h4>
            <h5 className="font-semibold text-md mb-5 text-center sm:text-start">
              {footer.text}
            </h5>
            <ul className="list-none flex flex-col gap-4 items-center sm:items-start">
              <li className="flex items-center gap-2">
                <IoCallOutline className="text-2xl" />
                <div className="text-sm">
                  <a
                    className="hover:text-[#FF5227] duration-150"
                    href="tel:+218 91 213 0023"
                  >
                    +218 91 213 0023
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <IoMailOutline className="text-2xl" />
                <div className="text-sm">
                  <a
                    className="hover:text-[#FF5227] duration-150"
                    href="mailto:info@wejda-aljadida.ly"
                  >
                    info@wejda-aljadida.ly
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <AiOutlineWhatsApp className="text-2xl" />
                <div className="text-sm">
                  <a
                    className="hover:text-[#FF5227] duration-150"
                    href="https://wa.me/+218912130023"
                  >
                    +218 91 213 0023
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <CiFacebook className="text-2xl" />
                <div className="text-sm">
                  <a className="hover:text-[#FF5227] duration-150" href="#">
                    wejdaaljadida
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-5">
              <ul className="list-none flex gap-6 justify-center sm:justify-start items-center">
                {footer.socialLinks.map((item, index) => {
                  return (
                    <li key={index} className="duration-200">
                      <a
                        target="_blank"
                        className="text-md duration-300 bg-[#f73d0f]  hover:text-black text-white p-3 rounded-sm cursor-pointer block"
                        href={item.href}
                      >
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="lg:ps-5 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between md:justify-around">
              {footer.dataLinks.map((item, index) => {
                return (
                  <div key={index} className="">
                    <h5 className="font-semibold text-2xl mb-6 text-center sm:text-start">
                      {item.title}
                    </h5>

                    <ul className="list-none flex flex-col gap-2 items-center sm:items-start">
                      {item.pages.map((page) => {
                        return (
                          <li
                            key={page.name}
                            className="relative inline w-fit before:absolute before:w-0 before:h-[1px] before:left-1/2 before:bottom-0 before:bg-white before:duration-200 hover:before:left-0 hover:before:w-full"
                          >
                            <a
                              className="text-xl text-gray-400 hover:text-white duration-300"
                              href={page.href}
                            >
                              {page.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center sm:gap-3 mt-10">
              <input
                className="py-4 px-5 rounded-s-md sm:rounded-md min-w-[120px] w-full sm:min-w-[320px] sm:w-[30%] text-sm text-black"
                placeholder={footer.input.placeholder}
              />
              <button className="bg-[#f73d0f] text-sm font-semibold text-primary-500 -ms-2 sm:m-0 rounded-md px-5 py-4 bg-secondary-300">
                {footer.input.button}
              </button>
            </div>
          </div>
        </div>

        <div className="py-6 px-2 border-t-[1px] border-t-[#ffffff1a]">
          <h6
            dangerouslySetInnerHTML={{ __html: footer.copyRight }}
            className="text-center sm:text-right text-white text-[13px]"
          ></h6>
        </div>
      </div>
    </footer>
  );
}
