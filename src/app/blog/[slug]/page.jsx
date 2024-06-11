import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className="flex gap-24">
      <div className="hidden md:flex md:flex-1 md:relative md:h-[calc(100vh-200px)]">
        <Image
          src="https://images.pexels.com/photos/20203927/pexels-photo-20203927/free-photo-of-bird-flying-over-a-hill-with-a-single-leafless-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-12 flex-1">
        <h1 className="text-4xl">Title</h1>
        <div className="flex gap-5">
          <Image
            src="https://images.pexels.com/photos/15698356/pexels-photo-15698356/free-photo-of-leafless-trees-in-a-clearing-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 font-bold">Author</span>
            <span className="font-medium">Sam Lee</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 font-bold">Published</span>
            <span className="font-medium">01.01.2024</span>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          accumsan tortor at nibh laoreet accumsan. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
          Curabitur accumsan maximus magna vel faucibus. Nulla sodales id est in
          pulvinar. In efficitur ex neque, bibendum sollicitudin arcu varius
          sed. Aenean suscipit, elit sed ornare ultrices, eros diam imperdiet
          eros, id pretium est orci et augue. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Phasellus sollicitudin lacus sed tempus pulvinar. Curabitur fringilla
          tellus vehicula imperdiet condimentum. Sed dignissim nunc ut commodo
          semper. Donec quis dignissim est, eu condimentum purus. Nullam
          accumsan lorem ultrices vulputate volutpat.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
