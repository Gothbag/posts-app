import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadPosts, postListSelector } from "../../redux/posts";
import PostList from "../../components/post-list";

import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();

  const posts = useSelector(postListSelector);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(loadPosts());
    }
  }, []);

  return (
    <div className="posts-container">
      <PostList posts={posts} />
    </div>
  );
}
