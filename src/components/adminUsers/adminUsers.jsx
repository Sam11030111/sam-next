import Image from "next/image";

import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div>
      <h1 className="text-xl font-light">Users</h1>
      {users.map((user) => (
        <div className="flex items-center justify-between my-5" key={user.id}>
          <div className="flex items-center gap-5">
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="bg-red-300 text-white py-2 px-4 rounded-md border-0 cursor-pointer">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
