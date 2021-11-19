import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { postsFocusItem, postsFocusedItemSelector } from "../../redux/posts";

import PostForm from "../../components/post-form";

const PostPage = () => {
  const { id = "" } = useParams();

  const dispatch = useDispatch();

  const post = useSelector(postsFocusedItemSelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(postsFocusItem(id));
  }, [id]);

  const params = new URLSearchParams(props.location.search);

  return (
    <div className="posts-container">
      <PostForm post={post} />
    </div>
  );
};

export default PostPage;
