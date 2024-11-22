import { User } from "@prisma/client";
import Ad from "./Ad";
import Birthdays from "./rightMenu/Birthdays";
import FriendRequests from "./rightMenu/FriendRequests";
import UserInfoCard from "./rightMenu/UserInfoCard";
import UserMediaCard from "./rightMenu/UserMediaCard";
import { Suspense } from "react";

type Prop = {
  user?: User;
}

const RightMenu = ({ user }: Prop) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
