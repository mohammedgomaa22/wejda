"use client";
import React, { useContext } from "react";
import BannerPage from "@/components/BannerPage";
// import { contact_data } from "../../utils/helpers";
import Image from "next/image";
import img1 from "public/contact/Contact Us-min.jpg";
import { MdLocationPin } from "react-icons/md";
import Link from "next/link";
import { LangContext } from "@/lang/TranslationProvider";

export default function page() {
  const {
    tra: { contact },
  } = useContext(LangContext);
  return (
    <>
      <BannerPage
        link={contact.title}
        section_id={"contact"}
        title={contact.title}
      />
      <section id="contact" className="mt-20">
        <div className="head">
          <h3 className="text-[40px] font-extrabold text-gray-900 w-fit mx-auto">
            {contact.header.mainHeader}
          </h3>
          <p className="text-xl mt-5 text-center text-gray-600 max-w-[650px] mx-auto">
            {contact.header.text}
          </p>
        </div>

        <div className="container">
          <div className="row py-12 mx-auto flex flex-col xl:flex-row items-center justify-between gap-10">
            <div className="flex-1 order-1 xl:order-2 overflow-hidden">
              <a
                href="mailto:info@wejda-aljadida.ly"
                className="relative block mx-auto md:max-w-[80%] xl:max-w-[100%] rounded-md overflow-hidden"
              >
                <Image
                  src={contact.contactImg}
                  alt="contact"
                  className="object-cover min-h-[300px] md:min-h-[400px] w-full opacity-100 duration-300 hover:opacity-95"
                />
              </a>
            </div>
            {/* <!-- [Form] --> */}
            <form
              data-aos="fade-down"
              className="form p-5 md:p-10 order-2 rounded-xl shadow flex-1 text-center lg:text-left duration-500 md:max-w-[80%] mx-auto border"
            >
              <div className="row grid md:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder={contact.form.name}
                  className="w-full p-3 outline-none text-[#3A3939] text-lg bg-gray-50/50 border rounded-md focus:shadow duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={contact.form.email}
                  className="w-full p-3 outline-none text-[#3A3939] text-lg bg-gray-50/50 border rounded-md focus:shadow duration-300"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder={contact.form.phone}
                  className="w-full p-3 outline-none text-[#3A3939] text-lg bg-gray-50/50 border rounded-md focus:shadow duration-300"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder={contact.form.subject}
                  className="w-full p-3 outline-none text-[#3A3939] text-lg bg-gray-50/50 border rounded-md focus:shadow duration-300"
                />
              </div>
              <textarea
                name="message"
                placeholder={contact.form.message}
                className="w-full h-40 max-h-63 p-4 outline-none text-[#3A3939] text-lg bg-gray-50/50 border rounded-md focus:shadow duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#f75932] text-white mt-3 rounded text-lg duration-300 hover:bg-[#FF5227] border px-3 py-2 mx-auto"
              >
                {contact.form.button}
              </button>
            </form>
          </div>
          <div className="contact-data">
            <h3 className="title text-[36px] my-5 font-extrabold text-gray-900 w-fit mx-auto text-center">
              {contact.cardTitle}
            </h3>
            <div className="row grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-10">
              {contact.cards.map((ele) => {
                return (
                  <div
                    className="col relative p-10 shadow-md rounded-md mt-10 duration-500 text-gray-500 hover:bg-black hover:-translate-y-2 border border-gray-50 bg-gray-50"
                    key={ele.id}
                  >
                    <div className="logo text-2xl text-[#FF5227] absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full flex justify-center items-center bg-white overflow-hidden outline outline-[6px] outline-gray-500/10 mx-auto font-bold">
                      {ele.icon}
                    </div>
                    <div className="data text-center py-6">
                      <Link
                        href={`${
                          ele.title === "email"
                            ? "mailto:"
                            : ele.title === "link"
                            ? null
                            : ele.title === "phone"
                            ? "tel:"
                            : ele.title === "whats"
                            ? "https://wa.me/"
                            : null
                        }${ele.data.replaceAll(" ", "")}`}
                        className="hover:text-[#FF5227] duration-300"
                        target="_blank"
                      >
                        {ele.data}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="address my-12 text-center flex flex-col justify-center items-center gap-3 text-xl max-w-[450px] mx-auto">
              <div className="icon text-[#FF5227]">
                <MdLocationPin className="text-4xl" />
              </div>
              <p className="text-gray-700">
                Tripoli – Libya 46 Al-wahat Center. & Al-Andalus District
                Misurata – Libya Free Zone
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
