"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";

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
      <button
        className="block cursor-pointer md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Menu
      </button>
      {isOpen && (
        <div className="flex flex-col items-center justify-center gap-2 md:hidden absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] border-l border-t border-white">
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
