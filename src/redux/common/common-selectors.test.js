import { postByIdWithUserSelector } from ".";

import { state } from "./__mocks__";

describe("common selectors", () => {
  describe("postByIdWithUserSelector", () => {
    it("should get the list of posts with its author", () => {
      expect(postByIdWithUserSelector(1)(state)).toEqual({
        ...state.posts[0],
        author: "Paquito"
      });
    });
  });
});
