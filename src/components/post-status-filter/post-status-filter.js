import React from "react";

import "./post-status-filter.css";

const PostStatusFilter = ({
  filter,
  onFilterSelect,
  postStatusFilterButtons,
}) => {
  let buttons = postStatusFilterButtons.map(({ name, label }) => {
    let activeClass = name === filter ? "btn-info" : "btn-outline-secondary";
    return (
      <button
        type="button"
        className={`btn ${activeClass}`}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default PostStatusFilter;
