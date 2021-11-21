import { normalizedUsersSelector, usersSelector } from ".";

import { state } from "./__mocks__";

describe("users selectors", () => {
  describe("usersSelector", () => {
    it("should get the list of users", () => {
      expect(usersSelector(state)).toEqual(state.users);
    });
  });

  describe("normalizedUsersSelector", () => {
    it("should get the users, normalized", () => {
      expect(normalizedUsersSelector(state)["1"]).toEqual(state.users[0]);
    });
  });
});
