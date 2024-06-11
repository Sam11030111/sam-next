import Image from "next/image";
import { Suspense } from "react";

import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     {
//       next: {
//         revalidate: 3600,
//       },
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className="flex gap-24">
      {post.img && (
        <div className="hidden md:flex md:flex-1 md:relative md:h-[calc(100vh-200px)]">
          <Image
            src="https://images.pexels.com/photos/20203927/pexels-photo-20203927/free-photo-of-bird-flying-over-a-hill-with-a-single-leafless-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col gap-12 flex-1">
        <h1 className="text-4xl">{post.title}</h1>
        <div className="flex gap-5">
          {post && (
            <Suspense fallback={<p>Loading...</p>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 font-bold">Published</span>
            <span className="font-medium">
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
