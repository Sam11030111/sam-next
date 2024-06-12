import Link from "next/link";

import Links from "./links/Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  // console.log(session);

  return (
    <div className="h-[100px] flex justify-between items-center z-10">
      <Link href="/" className="text-3xl font-bold">
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
