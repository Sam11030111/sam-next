import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  // const posts = await getPosts();
  const posts = await getData();

  return (
    <div className="flex flex-wrap gap-5 pl-20">
      {posts.map((post) => (
        <div key={post.id} className="w-[100%] md:w-[45%] xl:w-[30%]">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
