import { postListSelector, postsFocusedItemSelector } from ".";

import { state } from "./__mocks__";

describe("posts selectors", () => {
  describe("postListSelector", () => {
    it("should get the list of posts", () => {
      expect(postListSelector(state)).toEqual(state.posts.list);
    });
  });

  describe("postListSelector", () => {
    it("should get the list of posts", () => {
      expect(postsFocusedItemSelector(state)).toEqual(state.posts.focusedItem);
    });
  });
});
