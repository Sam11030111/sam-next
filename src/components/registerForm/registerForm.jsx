import { register } from "@/lib/action";

const RegisterForm = () => {
  return (
    <form action={register} className="flex flex-col text-center gap-8">
      <input
        className="p-2 bg-[#0d0c22] text-white border-0 rounded-md"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-2 bg-[#0d0c22] text-white border-0 rounded-md"
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        className="p-2 bg-[#0d0c22] text-white border-0 rounded-md"
        type="password"
        placeholder="password"
        name="password"
      />
      <input
        className="p-2 bg-[#0d0c22] text-white border-0 rounded-md"
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button className="bg-[#3673fd] p-3 cursor-pointer text-white font-bold border-0 rounded-md">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
