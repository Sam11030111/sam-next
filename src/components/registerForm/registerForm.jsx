"use client";

import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

import { register } from "@/lib/action";
import { BsExclamationCircle } from "react-icons/bs";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className="flex flex-col text-center gap-8">
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
      {state?.error && (
        <div className="bg-red-300 w-1/2 mx-auto py-2 rounded-md flex items-center justify-center gap-2">
          <BsExclamationCircle className="text-red-500" />
          <p>{state.error}</p>
        </div>
      )}
      <Link href="/login">
        Have an account? <b className="text-blue-400 underline ml-2">Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
