import { login } from "@/lib/action";

const LoginForm = () => {
  return (
    <form action={login} className="flex flex-col gap-6">
      <input
        className="p-2 bg-[#0d0c22] text-white border-0 rounded-md"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-2 bg-[#0d0c22] text-white border-0 rounded-md"
        type="password"
        placeholder="password"
        name="password"
      />
      <button className="bg-[#3673fd] p-3 cursor-pointer text-white font-bold border-0 rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
