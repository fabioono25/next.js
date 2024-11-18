import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">John Nash</span>
          <span className="text-sm">@johnNash</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          tenetur quisquam, officiis quos quis reiciendis animi iste laboriosam
          laudantium magnam sunt totam necessitatibus quas ea temporibus amet
          facilis fugit provident?
        </p>
        {/* {user.city && ( */}
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>CITY</b>
          </span>
        </div>
        {/* )} */}
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>{"John School"}</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>{"John Office"}</b>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href={"http://localhost:3000"}
              className="text-blue-500 font-medium"
            >
              {"http://localhost:3000"}
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined {"now"}</span>
          </div>
        </div>
        <form>
          <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
            {"Following"}
          </button>
        </form>
        <form className="self-end ">
          <button>
            <span className="text-red-400 text-xs cursor-pointer">
              {"Block User"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoCard;
