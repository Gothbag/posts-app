import { createSelector } from "reselect";

import { postsSelector } from "../posts";
import { normalizedUsersSelector } from "../users";

export const postsWithUserSelector = createSelector(
  [postsSelector, normalizedUsersSelector],
  (posts, normalizedUsers) =>
    posts.map(post => ({
      ...post,
      author: normalizedUsers[post.userId]
        ? normalizedUsers[post.userId].username
        : "Admin"
    }))
);

export const postByIdWithUserSelector = postId =>
  createSelector(
    [postsWithUserSelector],
    posts => posts.find(post => post.id === postId)
  );
