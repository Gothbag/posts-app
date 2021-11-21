import { createSelector } from "reselect";

export const usersSelector = state => state.users || [];

export const normalizedUsersSelector = createSelector(
  [usersSelector],
  users =>
    users.reduce((acc, user) => {
      if (!acc[user.id]) {
        acc[user.id] = user;
      }
      return acc;
    }, {})
);
