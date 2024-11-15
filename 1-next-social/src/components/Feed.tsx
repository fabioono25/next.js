import React from "react";
import Post from "./Post";

const Feed = () => {
  // const posts: any[] = [];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
      {/* {posts.length
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "No posts found!"} */}
      <Post />
    </div>
  );
};

export default Feed;
