"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
export default function NavItem({ nav }) {
  const pathname = usePathname();

  return (
    <li className="py-4">
      <Link
        className={`relative hover:text-[#ff5227] duration-200 w-full inline ${
          nav.href === pathname ? "text-[#ff5227]" : ""
        }`}
        href={nav.href}
      >
        {nav.label}
      </Link>
    </li>
  );
}
