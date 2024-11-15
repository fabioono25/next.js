import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/10833585/pexels-photo-10833585.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src="https://images.pexels.com/photos/10833585/pexels-photo-10833585.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">User Name</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              cupiditate nam tenetur cumque iure eum quis dolor doloremque
              architecto quam quisquam facere laudantium ratione asperiores,
              voluptas blanditiis minus quae sapiente.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">0 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Comments;
