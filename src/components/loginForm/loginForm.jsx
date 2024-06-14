"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import { login } from "@/lib/action";
import { BsExclamationCircle } from "react-icons/bs";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-6">
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
      {state?.error && (
        <div className="bg-red-300 mx-auto p-2 rounded-md flex items-center justify-center gap-2">
          <BsExclamationCircle className="text-red-500" />
          <p>{state.error}</p>
        </div>
      )}
      <Link href="/register">
        Don&apos;t have an account?{" "}
        <b className="text-blue-400 underline ml-2">Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
