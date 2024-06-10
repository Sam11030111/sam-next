import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between items-center">
      <div className="text-3xl font-bold">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
