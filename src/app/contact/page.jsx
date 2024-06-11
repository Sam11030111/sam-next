import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">
      <div className="md:flex-1 md:pl-20 md:relative">
        <Image
          src="/contact.png"
          alt="contact image"
          width={300}
          height={300}
          className="object-contain w-[150px] h-[150px] md:w-full md:max-w-[500px] md:h-auto"
        />
      </div>
      <div className="flex-1">
        <form className="flex flex-col gap-4">
          <input
            className="py-2 px-4 rounded-md border-0 outline-none bg-[#2d2b42]"
            type="text"
            placeholder="Name and Surname"
          />
          <input
            className="py-2 px-4 rounded-md border-0 outline-none bg-[#2d2b42]"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="py-2 px-4 rounded-md border-0 outline-none bg-[#2d2b42]"
            type="text"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            className="py-2 px-4 rounded-md border-0 outline-none bg-[#2d2b42]"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="bg-[#3673fd] p-2 text-white font-bold rounded-lg cursor-pointer text-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
