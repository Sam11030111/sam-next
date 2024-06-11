import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        <div className="relative w-[90%] h-[400px]">
          <Image
            src="https://images.pexels.com/photos/25184787/pexels-photo-25184787/free-photo-of-ginger-cat-sleeping-curled-up-in-a-ball.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm -rotate-90 m-auto">01.01.2024</span>
      </div>
      <div>
        <h1 className="w-[90%] text-2xl mb-5">Title</h1>
        <p className="w-[90%] mb-5 font-light text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Link className="underline" href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
