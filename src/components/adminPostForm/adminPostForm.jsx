"use client";

import { useFormState } from "react-dom";

import { addPost } from "@/lib/action";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <h1 className="text-xl font-light">Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input
        className="bg-[#2d2b42] border-0 rounded-md px-5 py-2"
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        className="bg-[#2d2b42] border-0 rounded-md px-5 py-2"
        type="text"
        name="slug"
        placeholder="slug"
      />
      <input
        className="bg-[#2d2b42] border-0 rounded-md px-5 py-2"
        type="text"
        name="img"
        placeholder="img"
      />
      <textarea
        className="bg-[#2d2b42] border-0 rounded-md px-5 py-2"
        type="text"
        name="desc"
        placeholder="desc"
        rows={10}
      />
      <button className="bg-[#3673fd] border-0 rounded-md font-bold px-5 py-3">
        Add
      </button>
      <p className="text-center text-red-400">{state?.error}</p>
    </form>
  );
};

export default AdminPostForm;
