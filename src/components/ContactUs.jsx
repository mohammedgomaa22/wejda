"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "public/door2door.c01900ea-min.jpg"
import {FaPhone} from "react-icons/fa"
import { LangContext } from "@/lang/TranslationProvider";
export default function ContactUs() {
    const {tra:{contactComponent}} = useContext(LangContext)
    return (
        <div className="relative h-[400px]">
            <Image
                src={banner}
                loading="lazy"
                alt="contact banner"
                className="object-cover h-full w-full"
            />
            <div className="text absolute h-full w-full top-0 left-0 bg-[#040f28b3]/[0.70] text-white flex flex-col justify-center items-center p-3 z-10">
                <div className="box lg:w-[700px] py-3 md:py-5 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10 bg-[#FF5227]">
                    <div className="text text-center">
                        <h3 className="text-[33px] font-semibold">{ contactComponent.header.mainHeader}</h3>
                        <p className="mt-3 text-[18px]">{ contactComponent.header.text}</p>
                    </div>
                    <Link href="/contact" className="btn flex text-lg font-semibold items-center gap-3 py-2 px-4 border duration-300 hover:bg-[#2D3F50]">
        {contactComponent.link}
                        <FaPhone />
                    </Link>
                </div>
            </div>
        </div>
    );
}
