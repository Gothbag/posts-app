import { createSelector } from "reselect";

export const postsSelector = state => state.posts || {};

export const postListSelector = createSelector(
  [postsSelector],
  posts => posts.list
);

export const postsFocusedItemSelector = createSelector(
  [postsSelector],
  posts => posts.focusedItem
);
