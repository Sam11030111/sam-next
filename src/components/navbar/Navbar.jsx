import Link from "next/link";

import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between items-center z-10">
      <Link href="/" className="text-3xl font-bold">
        Logo
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
