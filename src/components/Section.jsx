import React from "react";

export default function Section({ name, classname, children }) {
  return (
    <section className={`pt-[100px] pb-[90px] ${name} ${classname}`}>
      {children}
    </section>
  );
}
