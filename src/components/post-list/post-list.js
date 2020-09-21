import React from "react";

import PostListItem from "../post-list-item";
import "./post-list.css";

const PostList = ({ posts, deleteItem, onToggleImportant, onToggleLike }) => {
  const elements = posts.map((item) => {
    if (typeof item === "object" && !isEmptyObj(item)) {
      const { id, ...itemProps } = item;
      return (
        <li className="list-group-item" key={id}>
          <PostListItem
            {...itemProps}
            deleteItem={() => deleteItem(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLike={() => onToggleLike(id)}
          />
        </li>
      );
    }
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

function isEmptyObj(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

export default PostList;
