import React, { useState } from "react";
import { useSelector } from "react-redux";

import PostList from "../../components/post-list";

import "./Home.css";
import { postsWithUserSelector } from "../../redux/common";

export default function Home() {
  const [userFilter, setUserFilter] = useState("");

  const onChangeFilter = e => setUserFilter(e.target.value);

  const postsWithUsers = useSelector(postsWithUserSelector);

  return (
    <div className="posts-container">
      <input value={userFilter} onChange={onChangeFilter} />
      Filter by author
      <PostList
        posts={postsWithUsers.filter(post =>
          post.author.toUpperCase().includes(userFilter.toUpperCase())
        )}
      />
    </div>
  );
}
