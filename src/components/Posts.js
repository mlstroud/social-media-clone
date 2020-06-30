import React from "react";
import NewPost from "./NewPost";
import PostList from "./PostList";

function Posts() {
  return (
    <React.Fragment>
      <div class="row">
        <NewPost />
      </div>
      <PostList />
    </React.Fragment>
  );
}

export default Posts;