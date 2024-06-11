"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";
import Image from "next/image";

import { FaXmark } from "react-icons/fa6";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);

  // TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className="hidden md:flex md:items-center md:gap-2">
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="p-2 cursor-pointer font-bold bg-red-300 text-white rounded-lg text-sm">
              Logout
            </button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* <button
        className="block cursor-pointer md:hidden"
        onClick={() => setIsOpen(true)}
      >
        Menu
      </button> */}
      <Image
        className="block cursor-pointer md:hidden"
        src="/menu.png"
        alt=""
        width={25}
        height={25}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <>
          <div className="flex flex-col items-center justify-center gap-10 md:hidden absolute top-0 right-0 w-1/3 h-full border-l border-white bg-slate-700 shadow-xl">
            {links.map((link) => (
              <NavLink key={link.title} item={link} />
            ))}
          </div>
          <FaXmark
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-2xl cursor-pointer"
          />
        </>
      )}
    </div>
  );
};

export default Links;
