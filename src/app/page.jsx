import Image from "next/image";

const Home = () => {
  return (
    <div className="text-center flex flex-col md:flex-row md:text-left gap-[100px] ">
      <div className="flex items-center md:items-start flex-1 flex-col gap-12">
        <h1 className="text-7xl">Creative Thoughts Agency</h1>
        <p className="text-xl">
          Motivate yourself! Use your imagination to create different values!
        </p>
        <div className="flex gap-5">
          <button className="bg-blue-500 p-4 min-w-5 cursor-pointer border-0 rounded-md">
            Learn More
          </button>
          <button className="bg-gray-200 text-black p-4 min-w-5 cursor-pointer border-0 rounded-md">
            Contact
          </button>
        </div>
        <div className="w-[500px] h-12 relative grayscale ml-10">
          <Image src="/brands.png" alt="" fill />
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 md:relative">
        <Image src="/puzzle.gif" alt="" width={500} height={300} />
      </div>
    </div>
  );
};

export default Home;
