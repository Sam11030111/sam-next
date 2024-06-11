import PostCard from "@/components/postCard/postCard";

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-5 pl-20">
      <div className="w-[100%] md:w-[45%] xl:w-[30%]">
        <PostCard />
      </div>
      <div className="w-[100%] md:w-[45%] xl:w-[30%]">
        <PostCard />
      </div>
      <div className="w-[100%] md:w-[45%] xl:w-[30%]">
        <PostCard />
      </div>
      <div className="w-[100%] md:w-[45%] xl:w-[30%]">
        <PostCard />
      </div>
    </div>
  );
};
export default BlogPage;
