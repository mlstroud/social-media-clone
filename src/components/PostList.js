import React from "react";
import Post from "./Post";

function PostList() {
  return (
    <React.Fragment>
      <div class="row">
        <Post />
      </div>
      <div class="row">
        <Post />
      </div>
      <div class="row">
        <Post />
      </div>
    </React.Fragment>
  );
}

export default PostList;