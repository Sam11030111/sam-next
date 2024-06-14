"use client";

import { useFormState } from "react-dom";

import { addUser } from "@/lib/action";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <h1 className="text-xl font-light">Add New User</h1>
      <input
        className="bg-[#2d2b42] border-0 rounded-md px-5 py-2"
        type="text"
        name="username"
        placeholder="username"
      />
      <input
        className="bg-[#2d2b42] border-0 rounded-md px-5 py-2"
        type="text"
        name="email"
        placeholder="email"
      />
      <input
        className="bg-[#2d2b42] border-0 rounded-md px-5 py-2"
        type="password"
        name="password"
        placeholder="password"
      />
      <input
        className="bg-[#2d2b42] border-0 rounded-md px-5 py-2"
        type="text"
        name="img"
        placeholder="img"
      />
      <select
        className="bg-[#2d2b42] border-0 rounded-md px-5 py-2"
        name="isAdmin"
      >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button className="bg-[#3673fd] border-0 rounded-md font-bold px-5 py-3">
        Add
      </button>
      <p className="text-center text-red-400">{state?.error}</p>
    </form>
  );
};

export default AdminUserForm;
