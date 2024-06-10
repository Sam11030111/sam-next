"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`max-w-24 p-2 rounded-2xl font-medium text-center ${
        pathName === item.path && "bg-white text-[#0d0c22]"
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
