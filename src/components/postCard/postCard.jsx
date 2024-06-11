import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        {post.img && (
          <div className="relative w-[90%] h-[400px]">
            <Image src={post.img} alt="" fill className="object-cover" />
          </div>
        )}
        <span className="text-sm -rotate-90 m-auto">01.01.2024</span>
      </div>
      <div>
        <h1 className="w-[90%] text-2xl mb-5">{post.title}</h1>
        <p className="w-[90%] mb-5 font-light text-gray-400">{post.desc}</p>
        <Link className="underline" href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
