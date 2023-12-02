import React from "react";

export default function MainHeader({ title, text }) {
  return (
    <div className="head mb-14">
      <h3 className="text-3xl md:text-[38px] text-center font-extrabold text-gray-900 w-fit mx-auto">
        {title}
      </h3>
      {text ? (
        <p className="text-xl mt-5 text-center text-gray-600 max-w-[750px] mx-auto">
          {text}
        </p>
      ) : null}
    </div>
  );
}
