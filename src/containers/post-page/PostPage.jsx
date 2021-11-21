import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { addNewPost, postEdit } from "../../redux/posts";

import PostForm from "../../components/post-form";
import { SearchParams } from "../../constants";
import { postByIdWithUserSelector } from "../../redux/common";

const PostPage = () => {
  const { id = "" } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  const isEditMode = searchParams.get(SearchParams.isEditMode) === "true";
  const isNew = id === "new";

  const parsedId = parseInt(id);

  const post = useSelector(postByIdWithUserSelector(parsedId));

  if (!post && !isNew) {
    navigate("/");
  }

  const onSubmitForm = post => {
    if (isNew) {
      dispatch(addNewPost(post));
    } else {
      dispatch(postEdit({ ...post, id: parsedId }));
    }
    navigate("/");
  };

  return (
    <div>
      <PostForm
        post={post}
        isEditMode={isEditMode || isNew}
        onSubmit={onSubmitForm}
        primaryButtonText={isNew ? "Add" : "Accept"}
      />
    </div>
  );
};

export default PostPage;
