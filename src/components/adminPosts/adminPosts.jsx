import Image from "next/image";
import { getPosts } from "@/lib/data";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-xl font-light">Posts</h1>
      {posts.map((post) => (
        <div className="flex items-center justify-between my-5" key={post.id}>
          <div className="flex items-center gap-5">
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="bg-red-300 text-white py-2 px-4 rounded-md border-0 cursor-pointer">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
