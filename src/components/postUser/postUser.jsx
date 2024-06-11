import Image from "next/image";

import { getUser } from "@/lib/data";

// const getUser = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className="flex gap-5">
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <span className="text-gray-400 font-bold">Author</span>
        <span className="font-medium">{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
