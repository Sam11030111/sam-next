import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="text-center md:text-left flex gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h2 className="text-[#3673fd] font-semibold text-xl">About Agency</h2>
        <h1 className="text-[40px] font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-xl font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex flex-col gap-12 md:flex-row md:gap-0 items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#3673fd] font-extrabold text-xl">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#3673fd] font-extrabold text-xl">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#3673fd] font-extrabold text-xl">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 md:relative">
        <Image
          className="object-contain"
          src="/about.png"
          alt="about image"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
