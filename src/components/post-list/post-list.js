import React from "react";

import PostListItem from "../post-list-item";
import "./post-list.css";

const PostList = ({ posts }) => {
  const elements = posts.map(({ id, ...itemProps }) => {
    return (
      <li className="list-group-item" key={id}>
        <PostListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
